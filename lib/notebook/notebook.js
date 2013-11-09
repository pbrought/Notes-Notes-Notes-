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

exports.addNotebook = function( user, title ) {

}

exports.addNotebookTags = function( notebook, tags ) {

}

exports.shareNotebook = function( notebook, user, permissions ) {

}

exports.findNotebooks = function( str ) {
	getCollection( function (collection){
		var nameStream = collection.find( { title : { $regex : str } } ).stream();
		var tagStream = collection.find( { tag : { $regex : str } } ).stream();
	});
}