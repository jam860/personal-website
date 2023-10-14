import formData from 'form-data';
import Mailgun from 'mailgun.js';

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export default async function handler(req, res) {
    const formValues = JSON.parse(req.body);
    

    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: 'api', key: API_KEY });

    let emailText = "Hi! You have a new message from your blog!" + "\n\n" + 
    "Name: " + formValues.name + "\n" + "Email: " + formValues.email + "\n" + "Their Message: \n" + formValues.message;

    const messageData = {
        from: 'Contact Form <contact@mg.jam860.com>',
        to: 'jam860@uw.edu',
        subject: 'New Contact Form',
        text: emailText,
    };

    try {
        const emailRes = await client.messages.create(DOMAIN, messageData);
    } catch (err) {
        console.error('There was an error sending email', err);
    }


    res.status(200).json({ submitted: true });
}