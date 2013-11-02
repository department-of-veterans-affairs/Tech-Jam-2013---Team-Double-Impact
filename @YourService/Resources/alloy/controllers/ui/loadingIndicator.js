function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "ui/loadingIndicator";
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
    $.__views.loading = Ti.UI.createActivityIndicator({
        visible: true,
        style: Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
        id: "loading"
    });
    $.__views.window.add($.__views.loading);
    $.__views.__alloyId49 = Ti.UI.createLabel({
        font: {
            fontFamily: "Roboto-Bold",
            fontSize: "16dp",
            fontWeight: "bold"
        },
        color: "#333333",
        text: "Loading..",
        id: "__alloyId49"
    });
    $.__views.window.add($.__views.__alloyId49);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;