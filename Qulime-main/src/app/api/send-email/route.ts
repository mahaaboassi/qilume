import nodemailer from "nodemailer"
import { type NextRequest, NextResponse } from "next/server"

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as ContactFormData
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ message: "Name, Email, and Message are required." }, { status: 400 })
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "qilume.aesthetics@gmail.com",
        pass: "yrpj mmmu jeub ifqy",
      },
    })

    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Message</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f8f9fa;">
          <tr>
            <td align="center" style="padding: 40px 20px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; text-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                      📧 New Contact Message
                    </h1>
                    <p style="margin: 10px 0 0 0; color: #e8eaff; font-size: 16px; opacity: 0.9;">
                      Qilume Aesthetics Website
                    </p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <div style="margin-bottom: 30px;">
                      <p style="margin: 0 0 20px 0; color: #4a5568; font-size: 16px; line-height: 1.6;">
                        You've received a new message from your website contact form:
                      </p>
                    </div>
                    
                    <!-- Contact Details -->
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 20px; background-color: #f7fafc; border-radius: 8px; border-left: 4px solid #667eea;">
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                            <tr>
                              <td style="padding-bottom: 15px;">
                                <strong style="color: #2d3748; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">👤 Name</strong>
                                <p style="margin: 5px 0 0 0; color: #4a5568; font-size: 16px; font-weight: 500;">${name}</p>
                              </td>
                            </tr>
                            <tr>
                              <td style="padding-bottom: 15px;">
                                <strong style="color: #2d3748; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">📧 Email</strong>
                                <p style="margin: 5px 0 0 0;">
                                  <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-size: 16px; font-weight: 500;">${email}</a>
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <strong style="color: #2d3748; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">💬 Message</strong>
                                <div style="margin: 10px 0 0 0; padding: 15px; background-color: #ffffff; border-radius: 6px; border: 1px solid #e2e8f0;">
                                  <p style="margin: 0; color: #4a5568; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message.replace(/\n/g, "<br/>")}</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Action Button -->
                    <div style="text-align: center; margin: 30px 0;">
                      <a href="mailto:${email}?subject=Re: Your message to Qilume Aesthetics" 
                         style="display: inline-block; padding: 12px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; box-shadow: 0 2px 4px rgba(102, 126, 234, 0.3);">
                        Reply to ${name}
                      </a>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 30px; background-color: #f7fafc; text-align: center; border-radius: 0 0 12px 12px; border-top: 1px solid #e2e8f0;">
                    <p style="margin: 0; color: #718096; font-size: 14px; line-height: 1.5;">
                      This message was sent from the contact form on your website.<br/>
                      <strong>Qilume Aesthetics</strong> • ${new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    const mailOptions = {
      from: email,
      to: "info@qilumeaesthetics.com",
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: htmlTemplate,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Contact form error:", error)
    return NextResponse.json({ message: "Failed to send email", error: error.toString() }, { status: 500 })
  }
}
