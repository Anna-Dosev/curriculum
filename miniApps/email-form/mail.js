const mailGun = require('nodemailer-mailgun-transport');
const nodemailer = require('nodemailer'); //puts into memory, now cached

const creds = {
    API_KEY,
    DOMAIN,
    EMAIL_FROM,
    EMAIL_TO
} = process.env;

const transporter = nodemailer.createTransport(mailGun({
    auth: {
        api_key: API_KEY,
        domain: DOMAIN
    }
}));

const sendMail = (data, cb) => {
    const {name, email, message} = data;

    const mailOptions = {
        from: EMAIL_FROM,
        to: EMAIL_TO,
        subject: 'Someone has sent their contact information.',
        html: `
            ${name}
            ${email}
            ${message}
        `
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return cb(err, null);
        }
            return cb(null, data);
    })
}

module.exports = sendMail;