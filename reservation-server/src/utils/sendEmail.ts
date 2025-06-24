import nodemailer from 'nodemailer'

export async function sendEmail(to: string, subject: string,text: string){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    await transporter.sendMail({
        from: `"HP Portodent" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html: text,
    })
}