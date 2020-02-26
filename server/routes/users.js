var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  //console.log(req);
  
  var username = req.body.username
  var password = req.body.password
 
  //console.log(username + ' ' + password);
 // console.log(req.path)
  if (username === "sam" && password === "sam"){
    res.status(200).json({
      message: 'Login Success'
    })
  } else {
    res.send("login failed")
  }
})

router.get('/', function(req, res, next) {
  //let parsed = JSON.parse(req.body)
  console.log(req.body)
  res.send("success!!!")
})

module.exports = router;
