const express = require('express'),
	rtr = express.Router(),
	bodyParser = require("body-parser")

rtr.use(bodyParser.urlencoded({ extended: false }))
rtr.use(bodyParser.json())

function entero(numero) {
	return +numero
}
let userExample = {
	nombres: {
		primer: 'gabriel',
		ultimo: 'badenas'
	},
	documento:{
		tipo:'dni',
		numero:'12345678'
	},
	domicilio:{
		provincia:'caba',
		calle:'rivadavia',
		numero:1,
		puerta:'pb',
		localidad:'comuna 11',
		codigopostal:'1416'
	},
	email: {
		sub: 'gabrielsbadenas',
		at: '@',
		domain: 'gmail.com'
	},
	phone: {
		country: {
			name: 'ar',
			code: '+54'
		},
		area: {
			number: entero(11)
		},
		number:entero(12345678)
	}
}
let user = JSON.stringify(user0)
rtr.post('/', function (req, res) {

	try {
		res.status(201)
		res.send(user)
	} catch (error) {
		res.status(400)
		res.send({ errorMsg: error })
	}
	res.end()
})
rtr.get('/',function(req,res){
	let user = JSON.stringify(userExample)
	try{
		res.send(user)
		console.log(userExample)
	}catch(error){
		res.send(404)
	}
})
module.exports = rtr
