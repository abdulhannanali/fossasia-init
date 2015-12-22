var express = require("express")

var PORT = process.env.PORT || 3000
var HOST = process.env.HOST || "0.0.0.0"

var app = express()

app.set("views", __dirname + "/views")
app.set("view engine", "jade")

app.use(function (req, res, next) {
  res.render("index", {});
})

app.listen(PORT, HOST, function (error) {
  if (!error) {
    console.log(`Server is listening on PORT = ${PORT} HOST = ${HOST}`)
  }
})
