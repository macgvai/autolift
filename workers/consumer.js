import amqp from 'amqplib'
import { createTransport } from 'nodemailer'
import axios from 'axios'

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://guest:guest@rabbitmq:5672'
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID
const EMAIL_USER = process.env.EMAIL_USER
const EMAIL_PASS = process.env.EMAIL_PASS

async function start() {
    console.log('Starting connection...')
    const connection = await amqp.connect(RABBITMQ_URL)
    const channel = await connection.createChannel()

    const queue = 'orders_queue'

    await channel.assertQueue(queue, {
        durable: true
    })

    console.log('🐰 Worker started. Waiting messages...')

    channel.consume(queue, async (msg) => {
        if (!msg) return

        const data = JSON.parse(msg.content.toString())
        console.log('📩 Received:', data)

        try {
            await sendNotification(data)
            channel.ack(msg) // Только если всё прошло успешно
        } catch (error) {
            console.error('Failed to process message, rejecting:', error)
            // Можно добавить повторную отправку в очередь (nack с requeue)
            channel.nack(msg, false, true) // false = не все сообщения, true = requeue
        }
    })
}

async function sendNotification(data) {
    try {
        // Отправка в Telegram
        if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
            await axios.post(
                `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    chat_id: TELEGRAM_CHAT_ID,
                    text: `📦 Новый заказ:\nID: ${data.id}\nEmail: ${data.email}\nТовары: ${data.items.map(item => `\n- ${item.name} x${item.quantity}`).join('')}`
                }
            )
        }

        // Отправка на Email
        if (EMAIL_USER && EMAIL_PASS) {
            const transporter = createTransport({
                service: 'gmail',
                auth: {
                    user: EMAIL_USER,
                    pass: EMAIL_PASS
                }
            })

            await transporter.sendMail({
                from: EMAIL_USER,
                to: 'st.viktorr@gmail.com',
                subject: 'Подтверждение заказа',
                text: `📦 Новый заказ:\nID: ${data.id}\nEmail: ${data.email}\nТовары: ${data.items.map(item => `\n- ${item.name} x${item.quantity}`).join('')}`
            })
        }
    } catch (error) {
        console.error('Error sending notification:', error)
    }
}

start().catch(err => {
    console.error('Worker error:', err)
})