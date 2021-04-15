const express = require("express")
const router = express.Router()
const {
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
  getReferralByUserId,
  updateReferralToPaid,
  userCreateAlert,
  createUser,
  topTransactions,
  lastDeposit,
  lastWithdrawal,
  userContact,
} = require("../controllers/userControllers")
const protect = require("../middleware/authMiddleware")
const admin = require("../middleware/adminAuthMiddleware")

router.post("/register", registerUser)
router.post("/login", authUser)
router.get("/profile", protect, getUserProfile)
router.put("/profile", protect, updateUserProfile)

// transactions
router.post("/createtransaction/:id", protect, admin, createTransaction)
router.get("/transactions", protect, getSingleUserTransactions)
router.get("/all", protect, admin, getUsers)
router.get("/:id", protect, admin, getUserById)

// get users transaction /api/users/transaction/:id
router.get("/transaction/:id", protect, admin, getTransactionByUserId)
// Update transaction to paid /api/users/transaction/:id
router.put("/transaction/:id", protect, admin, updateWithdrawalToPaid)

// get users referral /api/users/referral/:id
router.get("/referral/:id", protect, admin, getReferralByUserId)
// Update referral to paid /api/users/referral/:id
router.put("/referral/:id", protect, admin, updateReferralToPaid)

// deleter user
router.delete("/:id", protect, admin, deleteUser)

// api/users/transactions/top
router.get("/transactions/top", topTransactions)

// api/users/transactions/last/deposit
router.get("/transactions/last/deposit", lastDeposit)

// api/users/transactions/last/deposit
router.get("/transactions/last/withdrawal", lastWithdrawal)

// User create transaction and sends the admin email
// api/users/alert
router.post("/alert", protect, userCreateAlert)

// api/users/contact
router.post("/contact", userContact)

// api/users/create
router.post("/create", protect, admin, createUser)

module.exports = router
