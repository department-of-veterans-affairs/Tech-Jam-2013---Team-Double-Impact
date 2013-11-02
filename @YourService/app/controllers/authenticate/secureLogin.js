//open event
$.window.addEventListener('open', function(_event) {
	$.username.focus();
});

$.contentParent.addEventListener('singletap', function(_event) {
    switch(_event.source.id) {
        //Login
        case 'okButton':
        	$.window.close();
			var newController = Alloy.createController("/mymed/MyMedicine");
            newController.window.open();
            break;
        case 'cancelButton':
        	$.window.close();
            break;
         case 'rememberParent':
            $.rememberButton.active = !$.rememberButton.active;
            updateRememberCheck($.rememberButton.active);
            break;
    }
});

function updateRememberCheck(_status) {
    if (_status) {
        $.rememberButton.backgroundImage = $.rememberButton.backgroundActive;
    } else {
        $.rememberButton.backgroundImage = $.rememberButton.backgroundInactive;
    }
}
