/**
 * Created by tallman on 11/4/13.
 */

//Responsive Things
$( function () {
	var things = $( 'div#nContainer' ).children,
		width = window.innerWidth,
		numThings = things.length,
		numWide = Math.floor( (width - 140) / 200 ),
		numTall = Math.ceil( numThings / numWide );

	for ( var i = 0; i < numTall; i++ ) {
		for ( var j = 0; j < numWide; j++ ) {

		}
	}
} );