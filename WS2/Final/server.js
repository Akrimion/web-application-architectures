var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();


//Scrapper LeBonCoin
app.get('/GETLBC', function(req, res){
	url = 'http://www.leboncoin.fr/voitures/870647900.htm?ca=12_s';

	
	request(url, function (error, response, html) {
		if (!error && response.statusCode == 200) {
			// lecture page LBC
			var aRecup='utag_data';
				var recupEnd='}';
			var indexVar = html.indexOf(aRecup);
			var firstCut = html.substr(indexVar+12);
			var index2Var = firstCut.indexOf(recupEnd);
			var utag = firstCut.substr(0,index2Var+1);
	}
        res.send('Check your console!'+utag_data. marque+'    '+utag_data. modele+'     '+utag_data. annee)
	})
})


//Send LaCentrale
app.get('/GETLC', function(req, res){
	url = 'http://www.leboncoin.fr/voitures/870647900.htm?ca=12_s';

	
	request(url, function (error, response, html) {
		if (!error && response.statusCode == 200) {
			// en passant par un fichier
				fs.writeFile('output.html', html, function(err){
				console.log('Scrapping sucess');
				// lecture page LBC
			var aRecup='utag_data';
				var recupEnd='}';
			var indexVar = html.indexOf(aRecup);
			var firstCut = html.substr(indexVar+12);
			var index2Var = firstCut.indexOf(recupEnd);
			var lastCut = firstCut.substr(0,index2Var+1);
			fs.writeFile('utag_data.json', lastCut, function(err){
			})
        })
		}
        res.send('Check your console!')
	})
})
app.listen('8080')
console.log('listen 8080');
exports = module.exports = app; 	