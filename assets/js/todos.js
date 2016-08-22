// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	//This-span parent-li of that span
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//Whenever enter is pressed while inside the input area
$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});
//Toggle list
$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});