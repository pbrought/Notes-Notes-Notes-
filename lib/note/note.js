/**
 * Created by tallman on 11/1/13.
 */

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

exports.addNote = function( notebook, title ) {

}

exports.addNoteTags = function( note, tags ) {

}

exports.shareNote = function( note, user, permissions ) {

}

exports.findNotes = function( str ) {

}