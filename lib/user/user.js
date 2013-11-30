/**
 * Created by tallman on 10/30/13.
 */
var bcrypt = require( 'bcrypt' );
var dbHelp = require( '../../helpers/dbHelper.js' );

/**
 * creates a new entry in the users collection with all of the parameters as attributes
 * calls the provided callback with the error that occurred if an error occurs
 */
exports.addUser = function ( fname, lname, username, email, password, callback ) {
	'use strict';
	dbHelp.dbConn( function ( err, db ) {
		if ( err ) {
			console.log( err );
			callback( err );
		}

		var users = db.collection( 'users' );
		users.insert(
			{
				fname : fname,
				lname : lname,
				username : username,
				userid : 0,
				email : email,
				password : password
			},
			function ( err, docs ) {
				if ( err ) {
					callback( err );
				}
			}
		);
	} );
};

/**
 * calls the callback with an array of user objects with user names that include username
 * or the error that occurred
 */
exports.findUser = function ( username, callback ) {
	'use strict';
	dbHelp.dbConn( function ( err, db ) {
		if ( err ) {
			callback( err );
		}

		var users = db.collection( 'users' );
		users.find( { username : username } ).toArray( function ( err, items ) {
			if ( err )
				callback( -1 );
			else if ( !items.length ) {
				callback( 0 );
			}
			else {
				callback( items[0]['userid'] );
			}
		} );
	} );
};

//returns the userid if the username/password combination exists or -1 if an error occurs trying to access the database
exports.authent = function ( username, password, callback ) {
	'use strict';
	dbHelp.dbConn( function ( err, db ) {
		if ( err ) {
			console.log( err );
			callback( -1 );
			return;
		}
		var userz = db.collection( 'users' );
		userz.find( { username : username, password : password } ).toArray( function ( err, items ) {
			if ( err )
				callback( -1 );
			else if ( !items.length ) {
				callback( 0 );
			}
			else {
				callback( items[0]['userid'] );
			}
		} );
	} )
};