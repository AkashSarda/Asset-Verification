var express = require('express')
var router = express.Router()

router.post('/verifyowner', function(req, res){
	var hash = sha256(req.body.Address + req.body.firstname + req.body.lastname + req.body.Hash + req.body.Date + req.body.ID)
	// use web3 to call verify function. won't cost gas
// hash.toString() is the doc hash, req.body.ethaddress is the asset_owner address


	// get the result in a 'result' variable
	render('verify', {result:result})
})

router.get('/verifyform', function(req, res){
	res.render('verify_form')
})

module.exports = router
