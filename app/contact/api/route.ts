import { NextResponse } from 'next/server';

import * as nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const reqq = await req.json();
  const { name, email, message } = reqq;

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        message: 'Please fill in all fields',
      },
      { status: 400 }
    );
  }

  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    await transport.sendMail({
      from: `Raunak Mandal, <${process.env.EMAIL_LOGIN}>`,
      to: `${name}, ${email}`,
      subject: `Thanks for reaching out, ${name}!`,
      text: `Hi ${name},\nThanks for reaching out! I'll get back to you as soon as possible.\n\nIn the meantime, here's a copy of your message:\n${message}.\n\nBest,\nRaunak`,
    });

    await transport.sendMail({
      from: `Raunak Mandal, <${process.env.EMAIL_LOGIN}>`,
      to: `Raunak Mandal, ${process.env.EMAIL_RAUNAK}`,
      subject: `${name} has reached out!`,
      text: `Looks like ${name} has reached out!\n\nHere's their message:\n\n${message}.`,
    });

    return NextResponse.json(
      {
        message: 'Your message has been sent!',
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        message: 'Something went wrong. Please try again later.',
      },
      { status: 500 }
    );
  }
}

export type T_Api_Res_ContactForm = {
  message: string;
};
