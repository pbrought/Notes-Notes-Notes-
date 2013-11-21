$(function(){

	$('#item_to_share').bind('click', function(){
		var conf = window.confirm("Choose new notebook to share?");
		if(conf){
			window.location.replace("/selectNotebook");
		}
	});

	$('#save_button').bind('click', function(){
		window.location.replace('/share');	
	});


});