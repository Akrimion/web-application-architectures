'use strict'

function lbc(){
	var URL =document.getElementById('inputUrl').value;
	var page=getPage(URL);
	
}


function getPage(urlGet){
	pjs.addSuite({
		// single URL or array
		url: urlGet,
		// single function or array, evaluated in the client
		scraper: function() {
			return utag_data;
		}
	});
};