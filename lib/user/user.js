/**
 * Created by tallman on 10/30/13.
 */
var bcrypt = require( 'bcrypt' );

doDbStuff = function( callback ) {
	var MongoClient = require( 'mongodb' ).MongoClient;
	MongoClient.connect( "mongodb://team326:notesnotesnotes@timm-allman.mynetgear.com:27017/notesjs", function( err, db ) {
		if ( err ) {
			return console.dir( err );
		}
		var collection = db.collection( 'users' );
		callback( collection );
	} );
}

exports.addUser = function( fname, lname, username, email, password ) {

}

exports.findUser = function( username ) {

}