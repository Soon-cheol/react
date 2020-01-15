var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/database.js");
var connection = mysql.createConnection(dbconfig);

/* GET home page. */
router.get("/", function(req, res, next) {
  connection.query("SELECT * FROM bbs;", (err, rows) => {
    if (err) throw err;
    console.log("The solution is: ", rows);
    res.send(rows);
  });
  // res.render("index", { title: "Express" });
});

module.exports = router;
