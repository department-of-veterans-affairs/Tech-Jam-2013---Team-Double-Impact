// $.history.addEventListener('singletap', function(e){
	// $.current_result.animate({
		// opacity: 0,
		// duration: 1000
	// });
	// $.history_result.image = "/mymed/history_result.png";
	// $.history_result.animate({
		// opacity: 1,
		// duration: 1000
	// });
// });
// $.current.addEventListener('singletap', function(e){
	// $.history_result.animate({
		// opacity: 0,
		// duration: 1000
	// });
	// $.current_result.image = "/mymed/current_result.jpg";
	// $.current_result.animate({
		// opacity: 1,
		// duration: 1000
	// });
// });
$.back.addEventListener('singletap', function(e){
	$.window.close();
});
$.logout.addEventListener('singletap', function(e){
	$.window.close();
});
$.loading.show();
setTimeout(function(){
	$.mylabtable.visible = true;
	$.loading.hide();
}, 3000);
