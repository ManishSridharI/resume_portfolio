require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
  let data = req.body;

  let smtpTransport = nodemailer.createTransport({
    service: 'Gmail', // Or another mail service
    auth: {
      user: 'immadimanishsridhar@gmail.com',
      pass: process.env.EMAIL_PASSWORD
    }
  });

  let mailOptions = {
    from: data.email,
    to: 'immadimanishsridhar@gmail.com',
    subject: `Message from ${data.name}`,
    html: `
      <h3>Contact Details:</h3>
      <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
      </ul>
      <h3>Message</h3>
      <p>${data.message}</p>
    `
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if(error) {
      res.send(error);
    } else {
      res.send('Success');
    }
  });

  smtpTransport.close();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
