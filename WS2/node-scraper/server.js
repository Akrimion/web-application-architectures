var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();
var http = require('http')
var bl = require('bl')

app.get('/scrape', function(req, res){
	url = 'http://www.leboncoin.fr/voitures/864248139.htm?ca=12_s';

	http.get(process.argv[2], function (response) {
		response.pipe(bl(function (err, data) {
		if (err)
			return console.error(err)
			data = data.toString()
			console.log(data.length)
			console.log(data)
		}))  
	})
	
})

app.listen('8080')
console.log('port 8080');
exports = module.exports = app; 	