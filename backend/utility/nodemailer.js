const nodemailer = require("nodemailer")

const confirmEmail = (user) => {
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: `${process.env.EMAIL_USERNAME}`,
      pass: `${process.env.EMAIL_PASSWORD}`,
    },
    tls: { rejectUnauthorized: false },
  })
  const options = {
    from: `${process.env.EMAIL_USERNAME}`,
    to: `${user.email}`,
    subject: "Account Email Validation",
    html: `
    <h1 style="color: #ffc107; text-align: center">Booming Coins LTD</h1>
    <h2>This is your account activation email</h2>
    <p>Click on the link below to activate your account.</p>
    <button
      style="
        padding: 0.25rem;
        background-color: rgb(32, 99, 32);
        font-size: 1.2rem;
        display: block;
        margin: 0 auto;
      "
    >
      <a
        style="color: white; text-decoration: none"
        href="https://boomingcoins.com/activate/user/${user.token}"
        >Activate account</a
      ></button
    ><br /><br />

    <i style="color: #ff3d1b">This link expires in the next 30 minutes.</i>
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

module.exports = confirmEmail
