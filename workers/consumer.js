import amqp from 'amqplib'

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://guest:guest@rabbitmq:5672'

async function start() {
    console.log('Starting connection...')
    const connection = await amqp.connect(RABBITMQ_URL)
    const channel = await connection.createChannel()

    const queue = 'orders_queue'

    await channel.assertQueue(queue, {
        durable: true
    })

    console.log('🐰 Worker started. Waiting messages...')

    channel.consume(queue, (msg) => {
        if (!msg) return

        const data = JSON.parse(msg.content.toString())

        console.log('📩 Received:', data)

        // обработка
        channel.ack(msg)
    })
}

start().catch(err => {
    console.error('Worker error:', err)
})