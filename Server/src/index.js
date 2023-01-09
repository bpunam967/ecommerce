const express = require("express");
const app = express ();
require('dotenv').config()
const port = process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')
const connect = require('./db/connect')
const users = require("../src/models/users")
const registerRouter = require('./routes/registerRouter');
// const Router = require("./routes")z

connect()

app.use(cors())
app.use(express.json());
app.use(users)
app.use(registerRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



