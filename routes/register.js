var express = require('express');
var connection =require('./users.js');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
})

router.post("/",function(req,res){
      var username = req.body.username;
      var password = req.body.password;
      var query = 'insert into users (username,password) values("'+username+'","'+password+'")'
      connection.query(query,function(err,rows){
          if(err){
              console.log(err);
              return;
          }
          res.json({"status":1});
      })
});

module.exports = router;