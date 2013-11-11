/**
 * Created by tallman on 11/1/13.
 */

var MongoClient = require( 'mongodb' ).MongoClient;

doDbStuff = function( callback ) {
	MongoClient.connect( "mongodb://team326:notesnotesnotes@timm-allman.mynetgear.com:27017/notesjs", function( err, db ) {
		if ( err ) {
			return console.dir( err );
		}
		var collection = db.collection( 'notes' );
		return callback( collection );
	} );
}

exports.addNote = function( notebookId, title, tags ) {

}

exports.addNoteTags = function( note, tags ) {

}

exports.shareNote = function( note, user, permissions ) {

}

exports.find = function( str ) {
	var results = [];
	doDbStuff( function ( collection ){
		var name = collection.find( { title : { $regex : str } } );
		var tag = collection.find( { tag : { $regex : str } } );
	});

	return results;
}