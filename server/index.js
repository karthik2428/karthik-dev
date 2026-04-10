import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { BrevoClient } from '@getbrevo/brevo'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '.env') })

const app = express()
const PORT = process.env.PORT || 5000

// Initialize Brevo Client
let brevoClient = null

if (process.env.BREVO_API_KEY) {
  brevoClient = new BrevoClient({
    apiKey: process.env.BREVO_API_KEY,
  })
  console.log('✅ Brevo client initialized')
} else {
  console.log('⚠️ Brevo API key not found')
}

// CORS
app.use(cors({
  origin: true,
  credentials: true
}))
app.use(express.json())

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err))

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
})
const Contact = mongoose.model('Contact', contactSchema)

// Send email function using Brevo SDK
const sendEmailNotification = async (formData) => {
  if (!brevoClient) {
    console.log('⚠️ Brevo not configured')
    return false
  }

  try {
    const { name, email, subject, message } = formData

    // Email to admin (you)
    const adminEmail = {
      subject: `📬 New Contact Form Message: ${subject}`,
      textContent: `New message from ${name}\n\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>✨ New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">📝 Subject:</div>
                <div class="value">${subject}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      sender: { 
        name: process.env.BREVO_FROM_NAME, 
        email: process.env.BREVO_FROM_EMAIL 
      },
      to: [{ 
        email: process.env.BREVO_TO_EMAIL, 
        name: process.env.BREVO_TO_NAME 
      }],
      replyTo: { 
        email: email, 
        name: name 
      }
    }

    // Send admin email
    const adminResult = await brevoClient.transactionalEmails.sendTransacEmail(adminEmail)
    console.log('✅ Admin email sent:', adminResult)

    // Auto-reply to user
    const userEmail = {
      subject: "Thank you for contacting me!",
      textContent: `Thank you for contacting me!\n\nDear ${name},\n\nThank you for contacting me! I have received your message and will get back to you as soon as possible.\n\nYour message: ${message}\n\nBest regards,\nKarthik Santhosh`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Reaching Out! 🙏</h2>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for contacting me! I have received your message and will get back to you as soon as possible.</p>
              <p><strong>Your message:</strong> ${message}</p>
              <p>Best regards,<br>Karthik Santhosh</p>
            </div>
          </div>
        </body>
        </html>
      `,
      sender: { 
        name: process.env.BREVO_FROM_NAME, 
        email: process.env.BREVO_FROM_EMAIL 
      },
      to: [{ 
        email: email, 
        name: name 
      }]
    }

    // Send user auto-reply
    const userResult = await brevoClient.transactionalEmails.sendTransacEmail(userEmail)
    console.log('✅ Auto-reply sent to user:', userResult)

    return true
  } catch (error) {
    console.error('❌ Error sending email:', error.response?.body || error.message)
    return false
  }
}

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body
    console.log('📨 Received:', { name, email, subject })

    // Save to MongoDB
    const contact = new Contact({ name, email, subject, message })
    await contact.save()
    console.log('✅ Saved to MongoDB')

    // Send emails
    const emailSent = await sendEmailNotification({ name, email, subject, message })

    res.json({ 
      message: 'Message sent successfully!', 
      emailSent 
    })
  } catch (error) {
    console.error('❌ Error:', error)
    res.status(500).json({ message: 'Error sending message' })
  }
})

app.get('/api/contacts', async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 })
  res.json(contacts)
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📧 Brevo: ${brevoClient ? 'Ready' : 'Disabled'}`)
})