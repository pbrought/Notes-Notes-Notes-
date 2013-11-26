
$(document).ready(function () {

	function ajaxrequest(){
	$.ajax({
		type: "POST",
		url: '/getnotebook',
		data: { _id : id},
	}).done(function(d){
		console.log("Got notebook");
		console.log(d);
		updatepage(d);
	
});
}

function updatepage(item){
	$('.header').html(item.title + " Notebook");
	$('#t').html(item.title + " Notebook");

}


ajaxrequest();










































});