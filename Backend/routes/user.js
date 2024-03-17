var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.post("/create", userController.create_user);

router.post("/login", userController.login_user);

router.get("/logout", userController.logout_user);

router.get("/settings/:userId", userController.get_settings);

router.put("/submit_settings/:userId", userController.submit_settings);

module.exports = router;
