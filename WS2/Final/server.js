var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if (page == '/home') {
		document.write(index.html);
    }
    else if (page == '/request') {
        if ('url' in params) {
			res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
		}
		else {
			res.write('Err no url found');
		}
    }
	
	
	
    res.end();
});
server.listen(8080);