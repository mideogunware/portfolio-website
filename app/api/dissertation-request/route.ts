import { type NextRequest, NextResponse } from "next/server"

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

        const emailData = {
          from: "Portfolio Dissertation Request <onboarding@resend.dev>",
          to: ["samuelogunware@gmail.com"],
          subject: `Dissertation Request from ${name}`,
          html: `
            <h2>New Dissertation Request</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <hr>
            <h3>Request Details:</h3>
            <p>This person has requested your cryptocurrency optimisation dissertation from your portfolio website.</p>
            ${message ? `<h3>Additional Message:</h3><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
            <hr>
            <p><strong>Action Required:</strong> Please send the full 45-page dissertation PDF to ${email}</p>
          `,
          reply_to: email,
        }

        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify(emailData),
        })

        console.log("Resend response status:", resendResponse.status)

        if (resendResponse.ok) {
          const result = await resendResponse.json()
          console.log("Dissertation request sent successfully:", result.id)

          return NextResponse.json(
            {
              success: true,
              message: "🎉 Request sent successfully! I'll email you the dissertation within 24 hours.",
              automated: true,
              emailId: result.id,
            },
            { headers: { "Content-Type": "application/json" } },
          )
        } else {
          const errorText = await resendResponse.text()
          console.error("Resend API error:", errorText)
          throw new Error("Resend failed")
        }
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
