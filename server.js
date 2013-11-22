/**
 * Module dependencies.
 */

var express = require( 'express' ),
	app = express(),
	http = require( 'http' ),
	server = http.createServer( app ),
	io = require( 'socket.io' ).listen( server ),
	index = require( './routes' ),
	user = require( './routes/user' ),
	search = require( './routes/search' ),
	share = require( './routes/share' ),
	path = require( 'path' );

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
app.get( '/share', share.share );
app.post( '/share/search', share.search );
app.post( '/share/edit', share.edit );
app.post( '/share/deleteUser', share.deleteUser );
app.post( '/share/canEditChange', share.canEditChange );
app.post( '/share/canViewChange', share.canViewChange );
app.post( '/share/addUser', share.addUser );
app.post( '/submit', index.submit );

server.listen( app.get( 'port' ), function () {
	console.log( 'Express server listening on port ' + app.get( 'port' ) );
} );

io.sockets.on( 'connection', function ( socket ) {} );