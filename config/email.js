const nodemailer=require('nodemailer')

module.exports=nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "5a16a7b1a719dc",
      pass: "db1806fa65a968",
    },
  });

