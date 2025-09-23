import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import type Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { userSubject, userEmail ,userMobile ,userName} = await request.json();

  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_TO,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  // Email template 
  const mailOptions: Mail.Options = {
    from: userEmail,
    to:process.env.MAIL_TO, 
    subject: `Message recieved from ${userEmail} `,
    text: `
    Message Details:
    ----------------
    From: ${userName}
    ${userMobile ? `Contact: ${userMobile}\n` : ''}
    Message:
    ${userSubject}
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, (err) => {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
