const express = require("express")
const router = express.Router()
const verifyUser = require("./controllers/userControllers")

// verify user http://localhost:4000/activate/user/:token
router.get("/", verifyUser)
module.exports = router
