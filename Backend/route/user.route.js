// const express=require("express");
// const router=express.Router();
// const signup =require("../controller/user.controller")

// router.post('/signup',signup)
// export default router; 

const express = require("express");
const router = express.Router();
const { signup } = require("../controller/user.controller");

router.post('/signup', signup);

module.exports = router;
