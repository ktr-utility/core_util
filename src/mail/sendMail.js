import nodemailer from 'nodemailer'


/**
 *  @param {string} subject
 *  @param {string} body
 */
export default async function sendMail(subject, body) {
    nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'luke.tych.alerts@gmail.com',
          pass: 'gpnpmprcctkdpjng'
        }
    })
    .sendMail({
        from: 'luke.tych.alerts@gmail.com', 
        to: 'luke.tych.alerts@gmail.com',
        subject,
        text: body
    }, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })
}