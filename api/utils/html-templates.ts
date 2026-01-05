type ContactEmailData = {
    name: string;
    email: string;
    message: string;
};

export function HTMLTemplate(data: ContactEmailData) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <title>New Contact Message</title>
        </head>
        <body style="
            margin: 0;
            padding: 0;
            background-color: #f9fafb;
            font-family: Arial, Helvetica, sans-serif;
            color: #111827;
        ">
            <div style="
            width: 100%;
            padding: 24px;
            box-sizing: border-box;
            ">
            <div style="
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                padding: 24px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.05);
            ">
                <h2 style="
                margin: 0 0 16px;
                font-size: 20px;
                font-weight: 600;
                ">
                📩 New Contact Message
                </h2>

                <p style="
                margin: 0 0 24px;
                font-size: 14px;
                color: #6b7280;
                ">
                You’ve received a new message from your portfolio contact form.
                </p>

                <div style="
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 24px;
                ">
                <p style="margin: 0 0 8px;">
                    <strong>Name:</strong> ${data.name}
                </p>

                <p style="margin: 0 0 8px;">
                    <strong>Email:</strong>
                    <a
                    href="mailto:${data.email}"
                    style="color: #2563eb; text-decoration: none;"
                    >
                    ${data.email}
                    </a>
                </p>

                <p style="margin: 0;">
                    <strong>Date:</strong> ${new Date().toLocaleString()}
                </p>
                </div>

                <div>
                <p style="
                    margin: 0 0 8px;
                    font-size: 14px;
                    font-weight: 600;
                ">
                    Message
                </p>

                <div style="
                    background-color: #f3f4f6;
                    border-radius: 8px;
                    padding: 16px;
                    font-size: 14px;
                    line-height: 1.6;
                ">
                    ${data.message}
                </div>
                </div>

                <div style="margin-top: 24px;">
                <a
                    href="mailto:${data.email}"
                    style="
                    display: inline-block;
                    padding: 10px 16px;
                    background-color: #2563eb;
                    color: #ffffff;
                    border-radius: 8px;
                    text-decoration: none;
                    font-size: 14px;
                    "
                >
                    Reply
                </a>
                </div>

                <hr style="
                border: none;
                border-top: 1px solid #e5e7eb;
                margin: 32px 0;
                " />

                <p style="
                margin: 0;
                font-size: 12px;
                color: #9ca3af;
                text-align: center;
                ">
                Sent from your portfolio contact form
                </p>
            </div>
            </div>
        </body>
        </html>
        `;
}
