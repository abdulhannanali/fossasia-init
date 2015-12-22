var express = require("express")

var PORT = process.env.PORT || 3000
var HOST = process.env.HOST || "0.0.0.0"

var app = express()

app.use(function (req, res, next) {
  res.send("Hello Fossasia!")
})

app.listen(PORT, HOST, function (error) {
  if (!error) {
    console.log(`Server is listening on PORT = ${PORT} HOST = ${HOST}`)
  }
})
