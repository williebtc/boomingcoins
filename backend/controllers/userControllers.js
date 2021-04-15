const User = require("../models/userModel")
const Transaction = require("../models/transactionModel")
const Referral = require("../models/ReferralModel")
const jwt = require("jsonwebtoken")
const generateToken = require("../utility/generateToken")
const asyncHandler = require("express-async-handler")
const confirmEmail = require("../utility/nodemailer")
const ReferralModel = require("../models/ReferralModel")
const userCreateTransaction = require("../utility/userCreateTransaction")
const { find } = require("../models/userModel")
const transactionNotice = require("../utility/transactionNotice")
const userContactt = require("../utility/userContact")

//description: This registers a user
//the routes are POST request of /api/users/register/?ref=emailaddress
//this a public routes
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  //This helps to complete the password match
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  } else {
    const user = await User.create({
      name,
      email,
      password,
    })

    if (user) {
      const theUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
        token: generateToken(user._id),
      }
      if (req.query.ref) {
        const e = req.query.ref
        const referralUser = await User.findOne({ email: e })
        if (referralUser) {
          referralUser.referral = referralUser.referral + 1
          await referralUser.save()

          const newReferral = new Referral({
            theReferralUser: referralUser._id,
            referredEmail: user.email,
          })
          newReferral.save()

          confirmEmail(theUser)
          res.status(201).json(theUser)
        } else {
          res.status(400)
          throw new Error("Invalid referral link.")
        }
      } else {
        confirmEmail(theUser)
        res.status(201).json(theUser)
      }
    } else {
      res.status(400)
      throw new Error("Invalid user data")
    }
  }
})
//description: This authenticates the user and gets a token
//the routes are POST request of /api/users/login
//this a public routes
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  //This helps to complete the password match
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    if (user.isVerified) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isVerified: user.isVerified,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error(
        "You have not verified your account. Check your email to verify your account."
      )
    }
  } else {
    res.status(401)
    throw new Error("Invalid email or password")
  }
})

//description: This gets users profile
//the routes are GETrequest of /api/users/profile   ---Deceptive || called asin /api/users/:id in frontend.
//this a private and protected route
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      referral: user.referral,
      isVerified: user.isVerified,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

//description: This updates users profile
//the routes are PUT request of /api/users/profile
//this a private and protected route
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      isVerified: user.isVerified,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

// description: This creates a deposit for the user
//the routes are POST request of /api/users/transaction
//this a transaction for ADMINS and protected route
const createTransaction = asyncHandler(async (req, res) => {
  const { email, amount, percent } = req.body
  const isUserEmailValid = await User.findById(req.params.id).select(
    "-password"
  )
  const isUserHasTransaction = await Transaction.findOne({
    email,
  })
  const { _id, name } = isUserEmailValid
  const { createdAt } = isUserHasTransaction
    ? isUserHasTransaction
    : { createdAt: new Date("11/21/1987 16:00:00") }

  convertTime = function (t) {
    return t.getTime()
  }
  const date = convertTime(new Date())
  const formerDate = convertTime(createdAt)
  const timeDiff = (new Date(date - formerDate).getMinutes() * 3) / 60

  if (!isUserHasTransaction) {
    var tenDays = function someDate(percent) {
      const day =
        percent == 0.1 ? 1 : percent == 0.4 || 0.8 ? 3 : percent == 1 ? 4 : 0

      const dateNew = new Date(new Date().setDate(new Date().getDate() + day))
      return dateNew
    }
    const newTransaction = new Transaction({
      user: _id,
      name: name,
      email: email,
      deposit: amount,
      percent: percent,
      withdrawal: (Number(amount) * Number(percent) + Number(amount)).toFixed(
        2
      ),
      withdrawalDate: tenDays(percent),
      isWithdrawalPaid: false,
    })

    const createdTransaction = await newTransaction.save()
    transactionNotice(createdTransaction)
    res.status(201).json(createdTransaction)
  } else {
    if (timeDiff > 3) {
      if (isUserEmailValid) {
        var tenDays = new Date(new Date().setDate(new Date().getDate() + 10))
        const newTransaction = await new Transaction({
          user: _id,
          name: name,
          email: email,
          deposit: amount,
          percent: percent,
          withdrawal: (
            Number(amount) * Number(percent) +
            Number(amount)
          ).toFixed(2),
          withdrawalDate: tenDays(percent),
          isWithdrawalPaid: false,
        })

        const createdTransaction = await newTransaction.save()
        await transactionNotice(isUserEmailValid)
        res.status(201).json(createdTransaction)
      } else {
        res.status(400)
        throw new Error("Failed to create transaction. Please try again.")
      }
    } else {
      res.status(400)
      throw new Error(
        "Unable to create transaction because this might be a duplicate transaction. You can create this transaction after 24 hours."
      )
    }
  }
})

// description: This creates a deposit for the user
//the routes are GET request of /api/users/transaction
//this a transaction for users and protected route

const getSingleUserTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({ user: req.user._id })
  if (transactions) {
    res.send(transactions)
  } else {
    res.status(400)
    throw new Error("You have no transactions at the moment.")
  }
})

//@Desc get all users
// route GET/api/users
//access Private/admin
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})
  if (users) {
    res.send(users)
  } else {
    res.status(400).send({ error: "An error occurred. Try again." })
  }
})

//@Desc delete a users
// route DELETE/api/users/:id
//access Private/admin
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({
      message: "User [ " + user.name + " ] has been removed Successfully",
    })
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

//@Desc GET user by ID
// route GET /api/users/:id
//access Private/admin
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id).select("-password")
  if (user) {
    res.json(user)
  } else {
    res.status(404)
    throw new Error("User not found")
  }
})

// description: This gets all the transactions by the user || ADMIN
//the routes are GET request of /api/users/transaction/:id
//this a transaction for ADMIN and protected route

const getTransactionByUserId = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({ user: req.params.id })
  if (transactions) {
    res.send(transactions)
  } else {
    res.status(400)
    throw new Error("User has no transaction at the moment.")
  }
})

// @desc    update Withdrawal To Paid
// @route   PUT /api/users/transaction/:id
// @access  Private/Admin
const updateWithdrawalToPaid = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id)

  if (transaction) {
    transaction.isWithdrawalPaid = true

    const updatedWithdrawal = await transaction.save()
    transactionNotice(updatedWithdrawal)
    res.json(updatedWithdrawal)
  } else {
    res.status(404)
    throw new Error("Transaction Not found")
  }
})

// Verify user email http://localhost:4000/activate/user/:token
const verifyUser = async (req, res) => {
  if (req.params.token) {
    const decoded = jwt.verify(req.params.token, process.env.JWT_SECRET)

    const user = await User.findById(decoded.id)
    if (user) {
      user.isVerified = true
      const verified = await user.save()

      if (verified) {
        const referredUser = await Referral.findOne({
          referredEmail: user.email,
        })
        if (referredUser) {
          referredUser.isVerified = true
          await referredUser.save()
        }
        res.send(
          "Your account has been verified. You can close this page and login to <a href='https://boomingcoins.herokuapp.com/login'>https://boomingcoins.herokuapp.com</>"
        )
      }
    } else {
      await user.remove()
      res.status(400).send("Verification failed. Your account wasn't verified.")
    }
  } else {
    res.status(404).send({ error: "This page not found." })
  }
  res.end()
}

// description: This gets all the referrals by the user || ADMIN
//the routes are GET request of /api/users/referral/:id
//this a referral for ADMIN and protected route

const getReferralByUserId = asyncHandler(async (req, res) => {
  const referral = await Referral.find({ theReferralUser: req.params.id })
  if (referral) {
    res.send(referral)
  } else {
    res.status(400)
    throw new Error("User has no referrals at the moment.")
  }
})

// @desc    update referral To Paid
// @route   PUT /api/users/referral/:id
// @access  Private/Admin
const updateReferralToPaid = asyncHandler(async (req, res) => {
  const referral = await Referral.findById(req.params.id)

  if (referral) {
    referral.isReferralPaid = true

    const updatedReferral = await referral.save()

    res.json(updatedReferral)
  } else {
    res.status(404)
    throw new Error("Referrals Not found")
  }
})

// User create transaction and sends the admin email
// api/users/alert
const userCreateAlert = asyncHandler(async (req, res) => {
  const user = req.body
  try {
    await userCreateTransaction(user)
    // console.log(user)
    res.send({ message: "Successfully initiated the deposit alert" })
  } catch (error) {
    res.send({ error: "An error has occured. try again later." })
  }
})

// Create user by admin api/users/create
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw new Error("User already exists")
  } else {
    const user = await new User({
      name,
      email,
      password,
      isVerified: true,
    })
    const createdUser = await user.save()
    if (user) {
      res.status(201).json(createdUser)
    } else {
      res.status(400)
      throw new Error("Failed to create a new user. Please try again.")
    }
  }
})

// top deposits
// api/users/transactions/top
const topTransactions = asyncHandler(async (req, res) => {
  const transaction = await Transaction.find({}).sort({ deposit: -1 }).limit(10)
  if (transaction) {
    res.send(transaction)
  } else {
    res.status(400)
    throw new Error("Failed to get top transactions. Please try again.")
  }
})
// last deposits
// api/users/transactions/last/deposit
const lastDeposit = asyncHandler(async (req, res) => {
  const transaction = await Transaction.find({ isWithdrawalPaid: false })
    .sort({ createdAt: -1 })
    .limit(10)
  if (transaction) {
    res.send(transaction)
  } else {
    res.status(400)
    throw new Error("Failed to get top deposit. Please try again.")
  }
})
// last deposits
// api/users/transactions/last/deposit
const lastWithdrawal = asyncHandler(async (req, res) => {
  const transaction = await Transaction.find({ isWithdrawalPaid: true })
    .sort({ createdAt: -1 })
    .limit(10)
  if (transaction) {
    res.send(transaction)
  } else {
    res.status(400)
    throw new Error("Failed to get top Withdrawal. Please try again.")
  }
})

// User create  sends the admin a contact email
// api/users/contact
const userContact = asyncHandler(async (req, res) => {
  const user = req.body
  try {
    await userContactt(user)
    // console.log(user)
    res.send({ message: "Message sent successfully." })
  } catch (error) {
    res.send({ error: "An error has occured. try again later." })
  }
})

//description: This updates any users profile by the admin
//the routes are PUT request of /api/users/:id
//this a private and protected route
// const updateUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.params.id)

//     if (user) {
//         user.name = req.body.name || user.name
//         user.email = req.body.email || user.email
//         user.isAdmin = req.body.isAdmin || user.isAdmin

//         const updatedUser = await user.save()
//         res.json({
//             _id: updatedUser._id,
//             name: updatedUser.name,
//             email: updatedUser.email,
//             isAdmin: updatedUser.isAdmin,
//         })
//     } else {
//         res.status(404)
//         throw new Error("User not found")
//     }
// })

module.exports = {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  createTransaction,
  getSingleUserTransactions,
  getUsers,
  getUserById,
  getTransactionByUserId,
  deleteUser,
  updateWithdrawalToPaid,
  verifyUser,
  getReferralByUserId,
  updateReferralToPaid,
  userCreateAlert,
  createUser,
  topTransactions,
  lastDeposit,
  lastWithdrawal,
  userContact,
  //        updateUser
}
