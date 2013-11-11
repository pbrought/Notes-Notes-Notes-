/**
 * Created by tallman on 11/1/13.
 */

var dbHelp = require( '../helpers/dbHelper.js' );

exports.addNotebook = function( userId, title, tags ) {

}

exports.addNotebookTags = function( notebook, tags ) {

}

exports.shareNotebook = function( notebook, user, permissions ) {

}

exports.find = function( str ) {
	var results,
		tagResults = [],
		titleResults = [];

	dbHelp.dbConn( function( err, db ) {
		if ( err ) ;

		var notebooks = db.collection( 'notebooks' );
		notebooks.find( { title : { $regex : str, $options : 'i' } }, { title : 1, tags : 1, sharedWith : 1 } ).toArray( function( err, results ) {
			if ( err ) ;
			titleResults = results;
		} );
		notebooks.find( { tag : { $regex : str, $options : 'i' } }, { title : 1, tags : 1, sharedWith : 1 } ).toArray( function( err, results ) {
			if ( err ) ;
			tagResults = results;
		} );

		db.close();
	} );

	results = titleResults;
	for ( var n in tagResults ) {
		if ( results.indexOf( n ) === -1 ) {
			results.push( n );
		}
	}

	return results;
}