const express = require("express")
const path = require("path")
const helmet = require("helmet")
const app = express()
const mongoose = require("mongoose")
const connectDB = require("./config/db")
const { verifyUser } = require("./controllers/userControllers")

// helmet site security

app.use(helmet())

// Middlewares
const { notFound, errorHandler } = require("./middleware/errorMiddleware")

// routes
const userRoutes = require("./routes/userRoutes")

require("dotenv/config")

connectDB()

app.use(express.json())

//User routes
app.use("/api/users", userRoutes)
app.use("/activate/user/:token", verifyUser)

// const __dirname = path.resolve()

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "./../frontend/build")))

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "/frontend", "build", "index.html"))
//   })
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running...")
//   })
// }
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(process.cwd(), "frontend/build")))
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "frontend/build/index.html"))
  })
} else {
  app.get("/", (req, res) => {
    res.send("API is running...")
  })
}

//Not found middleware
app.use(notFound)

//The middleware for the above
app.use(errorHandler)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})
