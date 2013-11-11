/**
 * Created by tallman on 10/28/13.
 */

var note = require( '../lib/note' );
var notebook = require( '../lib/notebook' );

exports.searchAll = function( req, res ) {
	var query = req.query.q;

	var noteResults = note.find( query );
	var notebookResults = notebook.find( query );

	var results = noteResults.concat( notebookResults );

	results.sort( function( a, b ) {
		if ( a.title == b.title ) {
			return 0;
		} else if ( a.title < b.title ) {
			return -1;
		} else {
			return 1;
		}
	} );

	res.render( 'search all', {
		title : 'Search All',
		query : query,
		results : results
	} );
};

exports.searchNotebook = function( req, res ) {

};