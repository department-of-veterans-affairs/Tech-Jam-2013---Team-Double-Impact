function Controller() {
    function updateRememberCheck(_status) {
        $.rememberButton.backgroundImage = _status ? $.rememberButton.backgroundActive : $.rememberButton.backgroundInactive;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "authenticate/secureLogin";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "transparent",
        fullscreen: false,
        orientationModes: [ Ti.UI.PORTRAIT ],
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.mask = Ti.UI.createView({
        backgroundColor: "#fff",
        opacity: .3,
        width: "100%",
        height: "100%",
        id: "mask"
    });
    $.__views.window.add($.__views.mask);
    $.__views.viewParent = Ti.UI.createView({
        backgroundImage: "/home-dashboard/login-bg.png",
        width: 255,
        height: 200,
        top: 20,
        borderColor: "gray",
        borderWidth: 4,
        borderRadius: 6,
        id: "viewParent"
    });
    $.__views.window.add($.__views.viewParent);
    $.__views.headerTitle = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        color: "#fff",
        height: 20,
        text: "Secure Login",
        textAlign: "center",
        top: 10,
        width: Ti.UI.SIZE,
        id: "headerTitle"
    });
    $.__views.viewParent.add($.__views.headerTitle);
    $.__views.contentParent = Ti.UI.createView({
        id: "contentParent"
    });
    $.__views.viewParent.add($.__views.contentParent);
    $.__views.content = Ti.UI.createScrollView({
        top: 0,
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        contentHeight: "auto",
        showVerticalScrollIndicator: true,
        scrollType: "vertical",
        id: "content"
    });
    $.__views.contentParent.add($.__views.content);
    $.__views.usernameParent = Ti.UI.createView({
        top: 60,
        height: 25,
        id: "usernameParent"
    });
    $.__views.content.add($.__views.usernameParent);
    $.__views.username = Ti.UI.createTextField({
        width: 225,
        height: 25,
        hintText: "User Name",
        clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
        backgroundColor: "#fff",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        autocorrect: false,
        font: {
            fontSize: "16dp"
        },
        id: "username"
    });
    $.__views.usernameParent.add($.__views.username);
    $.__views.passwordParent = Ti.UI.createView({
        top: 90,
        height: 25,
        id: "passwordParent"
    });
    $.__views.content.add($.__views.passwordParent);
    $.__views.password = Ti.UI.createTextField({
        width: 225,
        height: 25,
        hintText: "Password",
        passwordMask: true,
        backgroundColor: "#fff",
        font: {
            fontSize: "16dp"
        },
        id: "password"
    });
    $.__views.passwordParent.add($.__views.password);
    $.__views.rememberParent = Ti.UI.createView({
        left: 10,
        right: 10,
        width: Ti.UI.FILL,
        height: 48,
        top: 110,
        id: "rememberParent"
    });
    $.__views.content.add($.__views.rememberParent);
    $.__views.rememberButton = Ti.UI.createButton({
        left: 20,
        width: 30,
        height: 30,
        active: false,
        backgroundImage: "/general/forms/check-disabled.png",
        backgroundInactive: "/general/forms/check-disabled.png",
        backgroundActive: "/general/forms/check-enabled.png",
        touchEnabled: false,
        id: "rememberButton"
    });
    $.__views.rememberParent.add($.__views.rememberButton);
    $.__views.rememberText = Ti.UI.createLabel({
        font: {
            fontSize: "12dp",
            fontWeight: "bold"
        },
        color: "#fff",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        textAlign: "left",
        touchEnabled: false,
        text: "Remember Me",
        left: 45,
        id: "rememberText"
    });
    $.__views.rememberParent.add($.__views.rememberText);
    $.__views.cancelButton = Ti.UI.createButton({
        width: 80,
        height: 31,
        backgroundImage: "/home-dashboard/cancel-btn.png",
        bottom: 10,
        left: 25,
        id: "cancelButton"
    });
    $.__views.contentParent.add($.__views.cancelButton);
    $.__views.okButton = Ti.UI.createButton({
        width: 80,
        height: 31,
        backgroundImage: "/home-dashboard/ok-btn.png",
        bottom: 10,
        right: 25,
        id: "okButton"
    });
    $.__views.contentParent.add($.__views.okButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.window.addEventListener("open", function() {
        $.username.focus();
    });
    $.contentParent.addEventListener("singletap", function(_event) {
        switch (_event.source.id) {
          case "okButton":
            $.window.close();
            var newController = Alloy.createController("/mymed/MyMedicine");
            newController.window.open();
            break;

          case "cancelButton":
            $.window.close();
            break;

          case "rememberParent":
            $.rememberButton.active = !$.rememberButton.active;
            updateRememberCheck($.rememberButton.active);
        }
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;