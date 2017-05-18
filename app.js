var koa = require('koa');
var controller = require('koa-route');
var app = koa();
var querystring = require('querystring');

var views = require('co-views');
var render = views('./view', {
    map: {html: 'ejs'}
});

var koa_static = require('koa-static-server');



app.use(koa_static({
    rootDir: './static/',
    rootPath: '/static/',
    maxage: 0
}));

app.use(controller.get('/', function*() {
    this.set('Cache-Control', 'no-cache');
    this.body = yield render('index');
}));


app.listen(3000);
console.log('Koa server is started!');
