const nodemailer = require("nodemailer")

const userContact = (user) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: `${process.env.EMAIL_USERNAME}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
    tls: { rejectUnauthorized: false },
  })
  const options = {
    from: `${user.email}`,
    to: `${process.env.EMAIL_USERNAME}`,
    subject: `${user.subject}`,
    html: `
    <h1 style="color: #ffc107; text-align: center">Booming Coins LTD</h1>
    <h2>Contact message <i>(messages from users)</i></h2>
    <p>User Details:</p>
    <p>Name: ${user.firstName + " " + user.lastName}</p>
    <p>Email: ${user.email}</p>
    <p>Message: ${user.message}</p>

    <br />
    
    `,
  }

  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log(error)
      return
    } else {
      console.log(info)
    }
  })
}

module.exports = userContact
