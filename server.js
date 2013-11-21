/**
 * Module dependencies.
 */

var express = require( 'express' );
var index = require( './routes' );
var user = require( './routes/user' );
var search = require( './routes/search' );
var shared = require('./routes/shared');
var http = require( 'http' );
var path = require( 'path' );

var app = express();

// all environments
app.set( 'port', process.env.PORT || 1337 );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );
app.use( express.favicon() );
app.use( express.logger( 'dev' ) );
app.use( express.bodyParser() );
app.use( express.methodOverride() );
app.use( express.cookieParser( 'your secret here' ) );
app.use( express.session() );
app.use( app.router );
app.use( express.static( path.join( __dirname, 'public' ) ) );

// development only
if ( 'development' == app.get( 'env' ) ) {
	app.use( express.errorHandler() );
}

app.get( '/', index.home );
app.get( '/login', index.login );
app.get( '/users', user.list );
app.get( '/search', search.searchAll );
app.get( '/:id/search', search.searchNotebook );
app.get('/share', shared.share);
app.post('/share/search', shared.search);
app.post('/share/edit', shared.edit);
app.post('/share/deleteUser', shared.deleteUser);
app.post('/share/canEditChange', shared.canEditChange);
app.post('/share/canViewChange', shared.canViewChange);
app.post('/share/addUser', shared.addUser);

http.createServer( app ).listen( app.get( 'port' ), function() {
	console.log( 'Express server listening on port ' + app.get( 'port' ) );
} );
