// nodemailer to send emails
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "mail.coding-school.org",
  port: 465,
  auth: {
    user: "fbw46-2@coding-school.org",
    pass: "fbw46-2",
  },
  tls: {
    // do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

function sendEmail(contactName, email, message, callback) {
  const mailOption = {
    from: "fbw46-2@coding-school.org",
    to: ["b.brisilda1552@gmail.com", "mlizamaoliger@gmail.com", "volhvina@outlook.com"],
    subject: "Message from BAM CAT STORE",
    text: "\n" + "Contact Name:  " +  contactName + "\n" + "email:  " + email + "\n" + "Message: " + "\n" + message,
  };
  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      console.log(error);
      callback(false);
    } else {
      console.log(info.response);
      callback(true);
    }
  });
}

export default { sendEmail };