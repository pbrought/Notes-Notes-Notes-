/**
 * Created by tallman on 11/1/13.
 */
var dbHelp = require( '../../helpers/dbHelper.js' );

exports.addNote = function( notebookId, title, tags ) {
var note = {notebookID: notebookId,
					title: title,
					tags: tags };
					
	dbHelp.dbConn(function( err, db ){
		var notes = db.collection( 'notes');
		if(err)
			callback(err);
		else{
			notes.insert(note, function (err, db){
				callback(err, docs);
			});
		}
});
};

exports.addNoteTags = function( note, tags ) {

};

exports.shareNote = function( note, user, permissions ) {

};

exports.finder = function( str, user, callback ) {
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
exports.listThem = function(callback){
dbHelp.dbConn( function( err, db ) {
		if ( err ) console.dir( err );

		var note = db.collection( 'notes' );
		note.find().toArray( function( err, docs ) {
				if ( err ) console.dir( err );
				docs.forEach(function (value, index, ar) {
					ar[index].type = 'note';
				});
				callback( docs, db );
			} );
	} );
};
