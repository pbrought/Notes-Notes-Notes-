/**
 * Created by tallman on 11/1/13.
 */
var dbHelp = require( '../../helpers/dbHelper.js' );

exports.addNote = function( notebookId, title, tags ) {

};

exports.addNoteTags = function( note, tags ) {

};

exports.shareNote = function( note, user, permissions ) {

};

exports.find = function( str, user, callback ) {
	dbHelp.dbConn( function( err, db ) {
		if ( err ) console.dir( err );

		var notes = db.collection( 'notes' );
		notes
			.find( { $or : [
				{ title : { $regex : str, $options : 'i' } },
				{tags : { $regex : str, $options : 'i' } }
			] }, { title : 1, tags : 1, sharedWith : 1 } )
			.toArray( function( err, docs ) {
				if ( err ) console.dir( err );
				docs.forEach(function (value, index, ar) {
					ar[index].type = 'note';
				});
				callback( docs, db );
			} );
	} );
};