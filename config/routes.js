const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello Universe!");
// });

//Controllers
const pages = new (require("../app/controllers/pages.js"))();

router.get("/", pages.welcome);

module.exports = router;
