import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  console.log("=== Contact API Route Called ===")

  try {
    // Parse the request body
    const requestBody = await request.json()
    console.log("Request body received:", requestBody)

    const { name, email, message } = requestBody

    // Basic validation
    if (!name || !email || !message) {
      console.log("Missing required fields")
      return NextResponse.json(
        { error: "All fields are required" },
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
        console.log("Attempting to send email via Resend...")

        const emailData = {
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: ["samuelogunware@gmail.com"],
          subject: `Portfolio Contact from ${name}`,
          html: `
            <h2>New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            <hr>
            <h3>Message:</h3>
            <p>${message.replace(/\n/g, "<br>")}</p>
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
          console.log("Email sent successfully:", result.id)

          return NextResponse.json(
            {
              success: true,
              message: "🎉 Message sent successfully! I'll respond within 24 hours.",
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
    console.log("Using mailto fallback")
    const subject = `Portfolio Contact from ${name}`
    const messageBody = `Name: ${name}\nEmail: ${email}\nTime: ${new Date().toLocaleString()}\n\nMessage:\n${message}`
    const mailtoUrl = `mailto:samuelogunware@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`

    return NextResponse.json(
      {
        success: true,
        message: "Message prepared! Your email client will open to send it.",
        automated: false,
        mailtoUrl: mailtoUrl,
      },
      { headers: { "Content-Type": "application/json" } },
    )
  } catch (error) {
    console.error("API route error:", error)

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
  return NextResponse.json({ message: "Contact API is working" }, { headers: { "Content-Type": "application/json" } })
}
