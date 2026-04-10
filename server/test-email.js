import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { BrevoClient } from '@getbrevo/brevo'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.join(__dirname, '.env') })

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY,
});

try {
  const result = await brevo.transactionalEmails.sendTransacEmail({
    subject: "Test Email",
    textContent: "Hello! This is a test email from your portfolio!",
    htmlContent: "<h1>Test Email</h1><p>Your Brevo API is working perfectly!</p>",
    sender: { 
      name: process.env.BREVO_FROM_NAME, 
      email: process.env.BREVO_FROM_EMAIL 
    },
    to: [{ 
      email: process.env.BREVO_TO_EMAIL, 
      name: process.env.BREVO_TO_NAME 
    }]
  });
  console.log('✅ Test email sent:', result);
} catch (error) {
  console.error('❌ Failed:', error.response?.body || error.message);
}