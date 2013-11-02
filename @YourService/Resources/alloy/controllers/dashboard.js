function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "dashboard";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.swoosh = Ti.UI.createImageView({
        top: "0dp",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        zIndex: 1,
        backgroundImage: "/home-dashboard/background.jpg",
        touchEnabled: false,
        id: "swoosh"
    });
    $.__views.swoosh && $.addTopLevelView($.__views.swoosh);
    $.__views.logo = Ti.UI.createImageView({
        top: 160,
        opacity: 0,
        width: 200,
        height: 60,
        zIndex: 2,
        backgroundImage: "/home-dashboard/logo.png",
        id: "logo"
    });
    $.__views.logo && $.addTopLevelView($.__views.logo);
    $.__views.dashboardContainer = Ti.UI.createView({
        top: 145,
        bottom: 57,
        zIndex: 3,
        opacity: 0,
        id: "dashboardContainer"
    });
    $.__views.dashboardContainer && $.addTopLevelView($.__views.dashboardContainer);
    $.__views.dashboard = Ti.UI.createView({
        id: "dashboard"
    });
    $.__views.dashboardContainer.add($.__views.dashboard);
    $.__views.dashboardOne = Ti.UI.createView({
        top: 20,
        left: 20,
        right: 20,
        height: 190,
        layout: "vertical",
        borderColor: "gray",
        borderRadius: 9,
        borderWidth: 2,
        backgroundColor: "white",
        id: "dashboardOne"
    });
    $.__views.dashboard.add($.__views.dashboardOne);
    $.__views.mymed = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 48,
        touchEnabled: true,
        id: "mymed"
    });
    $.__views.dashboardOne.add($.__views.mymed);
    $.__views.myMedImage = Ti.UI.createImageView({
        width: 35,
        height: 35,
        left: 5,
        touchEnabled: false,
        id: "myMedImage",
        image: "/home-dashboard/mymed-icon.png"
    });
    $.__views.mymed.add($.__views.myMedImage);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontFamily: "Roboto-Bold",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        color: "#333",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: 58,
        touchEnabled: false,
        text: "My Medicines",
        id: "__alloyId0"
    });
    $.__views.mymed.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 1,
        backgroundColor: "#CCC",
        align: "center",
        bottom: 0,
        id: "__alloyId1"
    });
    $.__views.mymed.add($.__views.__alloyId1);
    $.__views.mylab = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 48,
        touchEnabled: true,
        id: "mylab"
    });
    $.__views.dashboardOne.add($.__views.mylab);
    $.__views.myLabsImage = Ti.UI.createImageView({
        width: 35,
        height: 35,
        left: 5,
        touchEnabled: false,
        id: "myLabsImage",
        image: "/home-dashboard/mylab-icon.png"
    });
    $.__views.mylab.add($.__views.myLabsImage);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        font: {
            fontFamily: "Roboto-Bold",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        color: "#333",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: 58,
        touchEnabled: false,
        text: "My Lab Reports",
        id: "__alloyId2"
    });
    $.__views.mylab.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 1,
        backgroundColor: "#CCC",
        align: "center",
        bottom: 0,
        id: "__alloyId3"
    });
    $.__views.mylab.add($.__views.__alloyId3);
    $.__views.myvital = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 48,
        touchEnabled: true,
        id: "myvital"
    });
    $.__views.dashboardOne.add($.__views.myvital);
    $.__views.myVitalsImage = Ti.UI.createImageView({
        width: 35,
        height: 35,
        left: 5,
        touchEnabled: false,
        id: "myVitalsImage",
        image: "/home-dashboard/myvital-icon.png"
    });
    $.__views.myvital.add($.__views.myVitalsImage);
    $.__views.__alloyId4 = Ti.UI.createLabel({
        font: {
            fontFamily: "Roboto-Bold",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        color: "#333",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: 58,
        touchEnabled: false,
        text: "My Vital Signs",
        id: "__alloyId4"
    });
    $.__views.myvital.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 1,
        backgroundColor: "#CCC",
        align: "center",
        bottom: 0,
        id: "__alloyId5"
    });
    $.__views.myvital.add($.__views.__alloyId5);
    $.__views.myencounter = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 48,
        touchEnabled: true,
        id: "myencounter"
    });
    $.__views.dashboardOne.add($.__views.myencounter);
    $.__views.myEncounterImage = Ti.UI.createImageView({
        width: 35,
        height: 35,
        left: 5,
        touchEnabled: false,
        id: "myEncounterImage",
        image: "/home-dashboard/myencounter-icon.png"
    });
    $.__views.myencounter.add($.__views.myEncounterImage);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        font: {
            fontFamily: "Roboto-Bold",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        color: "#333",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: 58,
        touchEnabled: false,
        text: "My Encounters",
        id: "__alloyId6"
    });
    $.__views.myencounter.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 1,
        backgroundColor: "#CCC",
        align: "center",
        bottom: 0,
        id: "__alloyId7"
    });
    $.__views.myencounter.add($.__views.__alloyId7);
    $.__views.dashboardTwo = Ti.UI.createView({
        top: 230,
        left: 20,
        right: 20,
        height: 47,
        layout: "vertical",
        borderColor: "gray",
        borderRadius: 9,
        borderWidth: 2,
        backgroundColor: "white",
        id: "dashboardTwo"
    });
    $.__views.dashboard.add($.__views.dashboardTwo);
    $.__views.myreminder = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 48,
        touchEnabled: true,
        id: "myreminder"
    });
    $.__views.dashboardTwo.add($.__views.myreminder);
    $.__views.myReminderImage = Ti.UI.createImageView({
        width: 35,
        height: 35,
        left: 5,
        touchEnabled: false,
        id: "myReminderImage",
        image: "/home-dashboard/myreminder-icon.png"
    });
    $.__views.myreminder.add($.__views.myReminderImage);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        font: {
            fontFamily: "Roboto-Bold",
            fontSize: "18dp",
            fontWeight: "bold"
        },
        color: "#333",
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        left: 58,
        touchEnabled: false,
        text: "My Reminders",
        id: "__alloyId8"
    });
    $.__views.myreminder.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        width: Ti.UI.FILL,
        height: 1,
        backgroundColor: "#CCC",
        align: "center",
        bottom: 0,
        id: "__alloyId9"
    });
    $.__views.myreminder.add($.__views.__alloyId9);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.handleClick = function(_event) {
        var id = _event.source.id;
        if ("__alloyId" === id.substring(0, "__alloyId".length)) return;
        if (id) {
            if ("mymed" === id) {
                var newController = Alloy.createController("/authenticate/secureLogin");
                newController.window.open();
            }
            if ("mylab" === id) {
                var newController = Alloy.createController("/mylab/MyLab");
                newController.window.open();
            }
        }
    };
    $.dashboardOne.addEventListener("singletap", $.handleClick);
    $.logo.animate({
        opacity: 1,
        duration: 500,
        curve: Ti.UI.ANIMATION_CURVE_EASE_IN
    }, function() {
        $.logo.animate({
            top: 27,
            duration: 500
        }, function() {
            $.dashboardContainer.animate({
                opacity: 1,
                duration: 1e3
            });
        });
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;