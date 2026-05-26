import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const { name, email, phone, suburb, carMake, registration, year, fault, smashDetails } = body;

    // Send email to admin
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: "urbanpanelshop@gmail.com",
      subject: `New Smash Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #F7A604; padding: 20px; border-radius: 5px; }
              .header h1 { color: #000; margin: 0; }
              .section { margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #F7A604; }
              .section h2 { color: #333; margin-top: 0; }
              .field { margin: 10px 0; }
              .label { font-weight: bold; color: #555; }
              .value { color: #333; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>✔️ New Smash Submission Received</h1>
              </div>

              <div class="section">
                <h2>Customer Details</h2>
                <div class="field">
                  <span class="label">Name:</span>
                  <span class="value">${name}</span>
                </div>
                <div class="field">
                  <span class="label">Email:</span>
                  <span class="value"><a href="mailto:${email}">${email}</a></span>
                </div>
                <div class="field">
                  <span class="label">Phone:</span>
                  <span class="value"><a href="tel:${phone}">${phone}</a></span>
                </div>
                <div class="field">
                  <span class="label">Suburb/Location:</span>
                  <span class="value">${suburb}</span>
                </div>
              </div>

              <div class="section">
                <h2>Vehicle Information</h2>
                <div class="field">
                  <span class="label">Car Make/Model:</span>
                  <span class="value">${carMake}</span>
                </div>
                <div class="field">
                  <span class="label">Registration:</span>
                  <span class="value">${registration}</span>
                </div>
                <div class="field">
                  <span class="label">Year:</span>
                  <span class="value">${year}</span>
                </div>
                <div class="field">
                  <span class="label">At Fault:</span>
                  <span class="value">${fault === "1" ? "Yes" : "No"}</span>
                </div>
              </div>

              <div class="section">
                <h2>Incident Details</h2>
                <div class="field">
                  <span class="label">Description:</span>
                  <div class="value" style="white-space: pre-wrap; margin-top: 5px;">${smashDetails}</div>
                </div>
              </div>

              <div class="footer">
                <p>This is an automated email notification from the Urban Panel Shop submission form.</p>
                <p>Login to your admin panel to view images and manage this submission.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}
