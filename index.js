var express = require('express')
var app = express()
var bp = require('body-parser')
var registrationRouter = require('./register_routing.js')
var verify = require('./verify_router')

app.set('view engine', 'pug')
app.set('views', './views')
app.use(bp.json())
app.use(bp.urlencoded({extended:true}))
app.use('/change', registrationRouter)
app.use('/verify', verify)

app.listen(3000)
