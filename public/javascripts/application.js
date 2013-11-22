/**
* Created by tallman on 11/4/13.
*/

$(function () {
	//Responsive Things
	var things = $('div#nHidden').children(),
		container = $('div#nContainer'),
		width = window.innerWidth,
		numThings = things.length,
		numWide = Math.floor((width - 140) / 200),
		numTall = Math.ceil(numThings / numWide);

	for (var i = 0; i < numTall; i++) {
		for (var j = 0; j < numWide && i * numWide + j <= numThings; j++) {
			console.log(i + ',' + j + ',' + ((i * numWide) + j));
			var thing = $(things[i * numWide + j]);
			thing.css({ left: j * 200 + 20, top: i * 80 + 10 });
			container.append(thing);
		}
	}
} );