var path = require('path');
var webpack = require('webpack');
var express = require('express');

var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

var app = express();
var compiler = webpack(config);
var port = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000  
}));

//// Handle all urls then return index.html
// app.get('/data/*.json', function (request, response){
//     response.sendFile(path.resolve(__dirname, 'data', 'appData.json'))
// })

app.get('/*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'views', 'index.html'))
})

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:' + port);
});
