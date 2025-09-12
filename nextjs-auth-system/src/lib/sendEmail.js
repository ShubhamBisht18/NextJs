import nodemailer from 'nodemailer'

let transporter  = null;

function getTransporter(){
    if(transporter ) return transporter 
    transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })
    return transporter
}

export async function sendEmail(to, subject, text) {
    const t = getTransporter()
    const info = await t.sendMail({
        from: `"NoReply" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        text
    })
    return info
}