const nodemailer = require("nodemailer")

const userCreateTransaction = (user) => {
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
    to: `${process.env.EMAIL_USERNAME}`,
    subject: "User Initiated a Transaction",
    html: `
  <h1 style="color: #ffc107; text-align: center">Booming Coins LTD</h1>
    <h2>User details</h2>
    <p>A user with the details: </p>
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
    <p>Currency: ${user.currency}</p>
    <p>Wallet: ${user.wallet}</p>
    <p>Plan: ${user.plan}</p>
    <p>Amount: ${user.amount}</p>
    <br>
    <p style="color: red; font-size: 2rem;">Confirm the user's payment and transaction before you create the transaction.</p><br>
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

module.exports = userCreateTransaction
