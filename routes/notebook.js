/**
 * Created by tallman on 10/28/13.
 */
/**
 * Created by tallman on 10/28/13.
 */
var username;

var notebook = require( '../lib/notebook' );
var note= require( '../lib/note' );
var dbHelp = require( '../helpers/dbHelper.js' );
var user = require('../lib/user' );



exports.notebookHome = function(req, res){

notebook.listThem(function( results, db){
	var noteResults = results;
	var noteDB = db;

			results.sort( function( a, b ) {
				if ( a.title == b.title ) {
					return 0;
				} else if ( a.title < b.title ) {
					return -1;
				} else {
					return 1;
				}
			} );

			res.render( 'home', {
				username : username,
				title: 'Home Screen',
				results : results,
				results2: noteResults
			} );

			db.close();
			noteDB.close();
		} );
	
};

exports.snb = function(req, res){	
res.render( 'selectednotebook', { id: req.params.id});
			
		} ;



exports.getNB = function(req, res){
	var id;
	if(req.body){
		id = req.body._id;
	}
	notebook.getNoteBook(id, function(err, item){
		if(err)
			console.error("db failed: " + err);
		else{
			res.contentType('application/json');
			res.send(item);
		}
	});

};


