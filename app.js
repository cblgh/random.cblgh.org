/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var app = express();
var debug = false;


// all environments
app.set('port', '7331');
app.use(express.logger('dev'));
app.use(express.json());

app.use(express.urlencoded());
app.use(express.methodOverride());

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

// TODO: add https://piratrad.io/random when it has launched
humerousRedirects = ["http://www.asciiartfarts.com/random.cgi", "http://wikihow.com/Special:Randomizer",
                    "http://en.wikipedia.org/wiki/Special:Random", "http://randomcolour.com/",
                    "http://wordsmith.org/words/random.cgi", "http://www.randomhaiku.com/",
                    "http://www.reddit.com/r/random", "http://poetryoutloud.org/poems-and-performance/random-poem",
                    "https://tao.cblgh.org"];

app.get("*", function(req, res) {
    res.redirect(humerousRedirects[Math.floor(Math.random() * humerousRedirects.length)]);
});
var server = http.createServer(app);
server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

function log(msg) {
    if (debug) {
        console.log("SRV: " + msg);
    }
}
