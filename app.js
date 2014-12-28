var http = require('http'),
    ss = require('socketstream'),
    db = require('node-common/lib/Mongo');

ss.client.define('main', {
    view: 'app.html',
    css: [],
    code: ['app'],
    tmpl: '*'
});

ss.http.route('/', function(req, res){
    res.serveClient('main');
});

ss.client.templateEngine.use(require('ss-hogan'));

if(ss.env === 'production'){
  ss.client.packAssets();
}

// Start web server
var server = http.Server(ss.http.middleware);
server.listen(8080);

// Start SocketStream
ss.start(server);

// Define global variables
global.db=db;
global.ss=ss;