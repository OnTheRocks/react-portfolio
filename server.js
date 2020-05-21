require('dotenv').config()

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();

const host = process.env.HOST;
const user = process.env.USER;
const pw = process.env.PW;
const PORT = process.env.PORT || 5454;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}


app.get('/api', (req, res) => {
  res.send('API Status: Running')
});

app.post('/api/email', (req, res) => {
  const output = `
  <p> You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li> 
    <li>Email: ${req.body.email} </li>
  </ul>
    <h3>Message:</h3>
    <p> ${req.body.message} </p>
    `;

  console.log(req.body);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: host,
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: user, // generated ethereal user
        pass: pw // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });

  
  
    // send mail with defined transport object
    let mailOptions = {
      from: '"Nodemailer Contact 👻" <ChicagoN8@gmail.com>', // sender address
      to: "nathan_huber@yahoo.com, ChicagoN8@Gmail.com", // list of receivers
      subject: "Node Contact Request", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };  

    res.status(200).json({
      success: true
  });

 // send mail with defined transport object
 transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
      return console.log(error);
      res.status(401).json({
        success: false
    });
  }

  console.log('Message sent: %s', info.messageId);   
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

});
});


app.listen(PORT, () => console.log(`Server started on port  ${PORT}.`));