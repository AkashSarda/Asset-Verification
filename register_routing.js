var express = require('express')
var router = express.Router()
var sha256 = require('crypto-js/sha256')
var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'root',
  database : 'asset'
});

router.get('/register', function(req, res){
  res.render('signup_form')
})

router.post('/register/add', function (req, res) {
  var hash = sha256(req.body.Address + req.body.firstname + req.body.lastname + req.body.Hash + req.body.Date + req.body.ID)
  var query = "insert into asset_owner values ('" + req.body.firstname  + ' ' + req.body.lastname + "', '" + hash.toString() + "', '" + req.body.ID + "')";
  console.log(query);


  // here perform the operation to put this hash on the blockchain.
  // web3 operation here.
  // req.body.ethaddress is the asset_owner address, hash.toString() is the dochash.

  //after inserting, send an email to the person of the hash at req.body.email

//  connection.query(query)
  res.render('cool')
})
/*
router.post('/update/:hash', function(req, res){
  var query = "update asset_owner set name = '" + sha256(req.body.name) + "' where  hash = '" + req.params.hash + "'";
  var message = '';
  connection.query(query, function(err, result){
    if (err) {
      message = "failed, maybe property not registered"
    }else{
      message = "Success!"
    }
    console.log(message)
    res.render('cool')
  })
})
*/

module.exports = router
