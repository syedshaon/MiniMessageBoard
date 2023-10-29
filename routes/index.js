const messages = [
  {
    text: "Hi there! How are you today?",
    user: "Mashi",
    added: new Date(),
  },
  {
    text: "Nice weather here! Would you like to visit sometime?",
    user: "Charles",
    added: new Date(),
  },
];

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", msgs: messages });
});

router.post("/", function (req, res, next) {
  messages.push({ text: req.body.msg, user: req.body.uName, added: new Date() });
  res.redirect("/");
});

module.exports = router;
