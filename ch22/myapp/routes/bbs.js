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

router.get("/edit", (req, res, next) => {
  res.render("bbs.pug");
});
router.post("/", (req, res, next) => {
  var input = req.body;

  console.log(input);
  connection.query(
    "INSERT INTO bbs(title, content)VALUES(?,?)",
    [input.title, input.content],
    function(error, result) {
      if (error) {
        console.log("insert error1", error.message);
      } else {
        res.redirect("/bbs/");
      }
    },
  );
});

// router.get("/:id", (req, res, next, id) => {});

module.exports = router;
