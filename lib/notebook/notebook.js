/**
 * Created by tallman on 11/1/13.
 */

var dbHelp = require( '../../helpers/dbHelper.js' );

exports.addNotebook = function( userId, title, tags ) {

};

exports.addNotebookTags = function( notebook, tags ) {

};

exports.shareNotebook = function( notebook, user, permissions ) {

};

exports.find = function( str, user, callback ) {
	dbHelp.dbConn( function( err, db ) {
		if ( err ) console.dir( err );

		var notebooks = db.collection( 'notebooks' );
		notebooks
			.find( { $or : [
				{ title : { $regex : str, $options : 'i' } },
				{tags : { $regex : str, $options : 'i' } }
			] }, { title : 1, tags : 1, sharedWith : 1 } )
			.toArray( function( err, docs ) {
				if ( err ) console.dir( err );
				docs.forEach(function (value, index, ar) {
					ar[index].type = 'notebook';
				});
				callback( docs, db );
			} );
	} );
};