import axios from 'axios';
import { NextResponse } from 'next/server';

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

  try {
    await axios.post(process.env.ZEPTOMAIL_HOST_URL, {
      "from": {
        "address": process.env.ZEPTOMAIL_FROM_EMAIL,
        "name": "Raunak Mandal"
      },
      "to": [
        {
          "email_address": {
            "address": email,
            "name": name
          }
        }
      ],
      "subject": `Thanks for reaching out, ${name}!`,
      "htmlbody": `<p>Hi ${name},</p><p>Thanks for reaching out! I'll get back to you as soon as possible.</p><p>In the meantime, here's a copy of your message:</p><blockquote><i>${message}</i></blockquote><p>Best,<br/>Raunak</p>`,
    }, {
      headers: { Authorization: `Zoho-enczapikey ${process.env.ZEPTOMAIL_API_KEY}` }
    });

    await axios.post(process.env.ZEPTOMAIL_HOST_URL, {
      "from": {
        "address": process.env.ZEPTOMAIL_FROM_EMAIL,
        "name": "Raunak Mandal"
      },
      "to": [
        {
          "email_address": {
            "address": process.env.ZEPTOMAIL_FROM_EMAIL,
            "name": "Raunak Mandal"
          }
        }
      ],
      "subject": `${name} has reached out!`,
      "htmlbody": `<p>Looks like ${name} - ${email} has reached out!</p><p>Here's their message:</p><blockquote>${message}</blockquote><p>Reply them: <a href="mailto:${email}">Reply</a></p>`,
    }, {
      headers: { Authorization: `Zoho-enczapikey ${process.env.ZEPTOMAIL_API_KEY}` }
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
