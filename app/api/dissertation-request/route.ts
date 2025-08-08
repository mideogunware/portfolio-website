import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: NextRequest) {
  console.log("=== Dissertation Request API Route Called ===")

  try {
    // Parse the request body
    const requestBody = await request.json()
    console.log("Request body received:", requestBody)

    const { name, email, message } = requestBody

    // Basic validation
    if (!name || !email) {
      console.log("Missing required fields")
      return NextResponse.json(
        { error: "Name and email are required" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("Invalid email format")
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      )
    }

    // Try to send email with Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    console.log("Resend API Key present:", !!RESEND_API_KEY)

    if (RESEND_API_KEY) {
      try {
        console.log("Attempting to send dissertation request via Resend...")
        
        const resend = new Resend(RESEND_API_KEY)

        const { data, error } = await resend.emails.send({
          from: "Portfolio Dissertation Request <onboarding@resend.dev>",
          to: ["samuelogunware@gmail.com"],
          subject: `Dissertation Request from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
              <div style="background-color: #007BFF; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 24px;">New Dissertation Request</h1>
              </div>
              <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #333; margin-bottom: 10px;">Request Information</h3>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #333; margin-bottom: 10px;">Request Details</h3>
                  <p>This person has requested your cryptocurrency optimisation dissertation from your portfolio website.</p>
                  ${message ? `<div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #007BFF; margin-top: 10px;">
                    <h4 style="color: #333; margin-bottom: 5px;">Additional Message:</h4>
                    <p style="margin: 0;">${message.replace(/\n/g, "<br>")}</p>
                  </div>` : ""}
                </div>
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
                <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px;">
                  <p style="margin: 0; color: #856404;"><strong>Action Required:</strong> Please send the full 45-page dissertation PDF to ${email}</p>
                </div>
                <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                  <p>This request was sent from your portfolio dissertation request form.</p>
                </div>
              </div>
            </div>
          `,
          replyTo: email,
        })

        if (error) {
          console.error("Resend error:", error)
          throw new Error(`Resend failed: ${error.message}`)
        }

        console.log("Dissertation request sent successfully:", data?.id)

        return NextResponse.json(
          {
            success: true,
            message: "🎉 Request sent successfully! I'll email you the dissertation within 24 hours.",
            automated: true,
            emailId: data?.id,
          },
          { headers: { "Content-Type": "application/json" } },
        )
      } catch (resendError) {
        console.error("Resend error:", resendError)
        // Fall through to mailto fallback
      }
    }

    // Fallback to mailto
    console.log("Using mailto fallback for dissertation request")
    const subject = `Dissertation Request from ${name}`
    const messageBody = `Hi Samuel,

I would like to request your cryptocurrency optimisation dissertation. Here are my details:

Name: ${name}
Email: ${email}
Time: ${new Date().toLocaleString()}
${message ? `\nMessage: ${message}` : ""}

Please send me the full 45-page dissertation at your earliest convenience.

Thank you!`

    const mailtoUrl = `mailto:samuelogunware@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`

    return NextResponse.json(
      {
        success: true,
        message: "Request prepared! Your email client will open to send it.",
        automated: false,
        mailtoUrl: mailtoUrl,
      },
      { headers: { "Content-Type": "application/json" } },
    )
  } catch (error) {
    console.error("Dissertation request API error:", error)

    return NextResponse.json(
      {
        error: "Server error occurred. Please email me directly at samuelogunware@gmail.com",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Dissertation Request API is working" },
    { headers: { "Content-Type": "application/json" } },
  )
}
