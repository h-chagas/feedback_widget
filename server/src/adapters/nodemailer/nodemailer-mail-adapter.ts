import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({

  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "142b620472d6ef",
    pass: "8e487bf75f2dc7"
  }

});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {

    await transport.sendMail({
      from: 'Fidget Team <fidget@fidget.com>',
      to: 'Hugo Chagas <hugochagasuk@gmail.com>',
      subject,
      html: body,
    });

  };
}