$(document).ready(function(){

	//I added this so one can more easily track the posts
	$(document).on('click', ".post", function(){
		$(this).toggleClass('selected');
	});

	//Parse select input
	$( "#target" ).change(function() {
		showAll();
		var selection = $('#target').val();

		switch(selection){
			case "all":
				selectAll();
				break;
			case "odd":
				selectOdd();
				break;
			case "even":
				selectEven();
				break;

		}
		
	});

});

showAll = function(){
	$(".post-wrapper").show();
}

selectAll = function(){
	$(".post-wrapper").show();
}

selectEven = function(){
	$(".post-wrapper").each(function(){
		var Id = $(this).attr('id');
		if(Id % 2 != 0){
			$(this).slideToggle("fast");
		}
	});
}

selectOdd = function(){
	$(".post-wrapper").each(function(){
		var Id = $(this).attr('id');
		if(Id % 2 != 1){
			$(this).slideToggle("fast");
		}
	});
}