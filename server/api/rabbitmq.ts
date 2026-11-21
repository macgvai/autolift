import amqp from 'amqplib'

let connection: any = null
let channel: any = null

async function getChannel() {
    if (connection && channel) return channel

    connection = await amqp.connect(process.env.RABBITMQ_URL!)
    channel = await connection.createChannel()

    await channel.assertQueue('orders_queue', { durable: true })

    return channel
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    try {
        const ch = await getChannel()

        ch.sendToQueue(
            'orders_queue',
            Buffer.from(JSON.stringify(body)),
            { persistent: true }
        )

        return { success: true }
    } catch (err) {
        console.error('RabbitMQ error:', err)
        return { success: false }
    }
})