var http = require('http'),
    ss = require('socketstream');

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
server.listen(3000);

// Start SocketStream
ss.start(server);