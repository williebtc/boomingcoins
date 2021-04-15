const nodemailer = require("nodemailer")

const transactionNotice = (user) => {
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
    subject: `${
      user.isWithdrawalPaid === false
        ? "Your Deposit was created successfully"
        : "Withdrawal was successful"
    }`,
    html: `
  <h1 style="color: #ffc107;">Booming Coins LTD</h1>
    <h2>${
      user.isWithdrawalPaid === false
        ? "Your investment was created successfully"
        : user.isWithdrawalPaid === true
        ? "Your funds has been successfully sent to you."
        : ""
    }</h2>
    <p>Transaction details: </p>
    <p>Name: ${user.name}</p>
    <p>Email: ${user.email}</p>
    <p>Date of Deposit: ${user.CreatedAt}</p>
    <p>Date of withdrawal: ${user.withdrawalDate}</p>
    <p>Plan: ${user.percent * 100}%</p>
    <p>Comment: ${
      user.isWithdrawalPaid === false
        ? "Your deposit of $" + user.deposit + " was successful"
        : "Withdrawal of $" + user.withdrawal + " was successful"
    }</p>
   
      <p>${
        user.isWithdrawalPaid === false &&
        "Withdrawal Amount: $" + user.withdrawal
      }
      </p>
      <p>${
        user.isWithdrawalPaid === false
          ? `Withdrawal date:  {new Date(user.withdrawalDate).toLocaleDateString()}`
          : ""
      }
      </p>
    <br>
    <p style="color: green;">Thanks for investing with us. We will like to have you again.</p><br>
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

module.exports = transactionNotice
