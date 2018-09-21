var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/:Name', function(req, res, next) {
  let users ={
    biola:{
      car:"benz", 
      dept:"English"
    },
    DoubleTee: {
      car:"berry", 
      dept:"Lagos"
    }
  }
  console.log(req.params.Name);
  let selectedUser= users[req.params.Name];
  let userCar=selectedUser.car;
  let userDept=selectedUser.dept;
  res.render('profile',{
    title:req.params.name,
    userCar:userCar,
    userDept:userDept
  });
  // res.render('profile', { title: req.params.Name });
});

module.exports = router;
