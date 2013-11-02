$.handleClick = function(_event) {
    var id = _event.source.id;
    if (id.substring(0, '__alloyId'.length) === '__alloyId'){
        return;
    }
    if (id) {
        if (id === "mymed"){
            var newController = Alloy.createController("/authenticate/secureLogin");
            newController.window.open();
        }
        if (id === "mylab"){
            var newController = Alloy.createController("/mylab/MyLab");
            newController.window.open();
        }
    }
};
$.dashboardOne.addEventListener("singletap", $.handleClick);
$.logo.animate({
    opacity : 1,
    duration : 500,
    curve: Ti.UI.ANIMATION_CURVE_EASE_IN
    }, function(e) {
        $.logo.animate({
            top : 27,
            duration : 500
            }, function(e){
            	$.dashboardContainer.animate({
					opacity: 1,
					duration: 1000
				});
            });
    });

