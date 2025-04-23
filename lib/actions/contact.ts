'use server'
import nodemailer from 'nodemailer';
import { getSiteData } from '../utils';

export async function sendContact(formData: FormData) {
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.GMAIL_APP_USERNAME,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #3b82f6; padding: 24px; border-radius: 8px 8px 0 0;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 32px;">
                <div style="margin-bottom: 24px;">
                    <h2 style="color: #1f2937; font-size: 18px; margin-bottom: 16px; font-weight: 600;">Contact Details</h2>
                    <table style="width: 100%;">
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280; width: 100px;">Name:</td>
                            <td style="padding: 8px 0; color: #1f2937;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280;">Email:</td>
                            <td style="padding: 8px 0; color: #1f2937;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280;">Phone:</td>
                            <td style="padding: 8px 0; color: #1f2937;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #6b7280;">Company:</td>
                            <td style="padding: 8px 0; color: #1f2937;">${company}</td>
                        </tr>
                    </table>
                </div>

                <div>
                    <h2 style="color: #1f2937; font-size: 18px; margin-bottom: 16px; font-weight: 600;">Message</h2>
                    <div style="background-color: #f9fafb; padding: 16px; border-radius: 4px; color: #1f2937;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                </div>
            </div>

            <div style="padding: 24px; background-color: #f9fafb; border-radius: 0 0 8px 8px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 0; color: #6b7280; font-size: 14px;">
                    This email was sent from the contact form on your website.
                    <br>
                    <span style="color: #3b82f6;">${new Date().toLocaleDateString()}</span>
                </p>
            </div>
        </div>
        <footer style="margin-top: 20px; text-align: center; font-size: 12px; color: #6b7280;">
        <a href="${getSiteData().siteUrl}" style="color: #3b82f6; text-decoration: none;">${getSiteData().siteName}</a> &copy; ${new Date().getFullYear()}
        </footer>
    </body>
    </html>
    `;

    const mailOptions = {
        from: email,
        to: process.env.GMAIL_APP_USERNAME,
        subject: `Contact Form Submission from ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Company: ${company}
            Message: ${message}
        `,
        html: htmlTemplate
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
}