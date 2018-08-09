var express = require("express");
var router = express.Router();

const queries = require("../db/queries");
const authUtils = require("../Utils/auth");

router.post("/login", function(req, res, next) {
    console.log(req.body);
    queries.getUserByUsername(req.body.username).then(user => {
        if (!user) {
            return res.json({ message: "user not found" });
        }
        const passwordMatch = authUtils.comparePassword(
            req.body.password,
            user.password
        );

        if (passwordMatch) {
            res.json({ message: "login successful" });
        } else {
            res.json({ message: "Password incorrect nerd" });
        }
    });
});

router.post("/signup", function(req, res, next) {
    res.json({ message: "signup successful" });
});

module.exports = router;
