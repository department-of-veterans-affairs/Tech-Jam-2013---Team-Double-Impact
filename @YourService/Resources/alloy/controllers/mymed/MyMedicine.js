function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mymed/MyMedicine";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.window = Ti.UI.createWindow({
        backgroundColor: "#FFF",
        fullscreen: false,
        orientationModes: [ Ti.UI.PORTRAIT ],
        bottom: 50,
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.contentParent = Ti.UI.createView({
        top: 0,
        bottom: 0,
        width: Ti.UI.FILL,
        backgroundImage: "/home-dashboard/background.jpg",
        id: "contentParent"
    });
    $.__views.window.add($.__views.contentParent);
    $.__views.header = Ti.UI.createView({
        backgroundImage: "/mymed/header.png",
        top: 20,
        left: 0,
        height: 40,
        id: "header"
    });
    $.__views.contentParent.add($.__views.header);
    $.__views.back = Ti.UI.createView({
        backgroundImage: "/mymed/back.png",
        top: 20,
        left: 0,
        height: 40,
        width: 50,
        id: "back"
    });
    $.__views.contentParent.add($.__views.back);
    $.__views.logout = Ti.UI.createView({
        backgroundImage: "/mymed/logout.png",
        top: 25,
        right: 3,
        height: 32,
        width: 40,
        id: "logout"
    });
    $.__views.contentParent.add($.__views.logout);
    $.__views.loading = Ti.UI.createActivityIndicator({
        visible: true,
        style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
        id: "loading"
    });
    $.__views.contentParent.add($.__views.loading);
    $.__views.__alloyId26 = Ti.UI.createTableViewSection({
        id: "__alloyId26"
    });
    var __alloyId27 = [];
    __alloyId27.push($.__views.__alloyId26);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId28"
    });
    $.__views.__alloyId26.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "18-Mar-10 Till Now",
        id: "__alloyId29"
    });
    $.__views.__alloyId28.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 150,
        width: 160,
        height: Ti.UI.FILL,
        textAlign: "left",
        text: "Multi-vitamin; Dosage:100% RDA, 1 TB, Daily",
        id: "__alloyId30"
    });
    $.__views.__alloyId28.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId31"
    });
    $.__views.__alloyId26.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "01-Feb-10 to 21-Feb-10",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 150,
        width: 160,
        height: Ti.UI.FILL,
        textAlign: "left",
        text: "Cough Medicine; Dosage:1000mg, 2 TBS, Morning and Night",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId34"
    });
    $.__views.__alloyId26.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "08-Mar-08 to 06-Jan-09",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 150,
        width: 160,
        height: Ti.UI.FILL,
        textAlign: "left",
        text: "Ginkgo biloba; Dosage:2 cpl, Daily",
        id: "__alloyId36"
    });
    $.__views.__alloyId34.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId37"
    });
    $.__views.__alloyId26.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "15-Jun-05 to 15-Jun-06",
        id: "__alloyId38"
    });
    $.__views.__alloyId37.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 150,
        width: 160,
        height: Ti.UI.FILL,
        textAlign: "left",
        text: "Aspirin EC; Dosage:81mg, 1 TBS, Daily",
        id: "__alloyId39"
    });
    $.__views.__alloyId37.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId40"
    });
    $.__views.__alloyId26.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "11-Mar-05 to 20-Apr-05",
        id: "__alloyId41"
    });
    $.__views.__alloyId40.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 150,
        width: 160,
        height: Ti.UI.FILL,
        textAlign: "left",
        text: "Ginkgo biloba; Dosage:2 cpl, Daily",
        id: "__alloyId42"
    });
    $.__views.__alloyId40.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId43"
    });
    $.__views.__alloyId26.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "10-Feb-05 to 12-Feb-05",
        id: "__alloyId44"
    });
    $.__views.__alloyId43.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 150,
        width: 160,
        height: Ti.UI.FILL,
        textAlign: "left",
        text: "Cough Medicine; Dosage:1000mg, 2 TBS, Morning and Night",
        id: "__alloyId45"
    });
    $.__views.__alloyId43.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId46"
    });
    $.__views.__alloyId26.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "01-Mar-04 to 12-Apr-04",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    $.__views.__alloyId48 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 150,
        width: 160,
        height: Ti.UI.FILL,
        textAlign: "left",
        text: "Tammy Flu; Dosage:100mg, 1 TB, Morning",
        id: "__alloyId48"
    });
    $.__views.__alloyId46.add($.__views.__alloyId48);
    $.__views.mylabtable = Ti.UI.createTableView({
        top: 80,
        bottom: 40,
        width: Ti.UI.FILL,
        visible: false,
        data: __alloyId27,
        id: "mylabtable"
    });
    $.__views.contentParent.add($.__views.mylabtable);
    $.__views.print = Ti.UI.createImageView({
        top: 390,
        left: 20,
        height: 35,
        width: 50,
        id: "print",
        image: "/mymed/print.png"
    });
    $.__views.contentParent.add($.__views.print);
    $.__views.fax = Ti.UI.createImageView({
        top: 390,
        left: 140,
        height: 35,
        width: 50,
        id: "fax",
        image: "/mymed/fax.png"
    });
    $.__views.contentParent.add($.__views.fax);
    $.__views.email = Ti.UI.createImageView({
        top: 394,
        left: 260,
        height: 27,
        width: 40,
        id: "email",
        image: "/mymed/email.png"
    });
    $.__views.contentParent.add($.__views.email);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.back.addEventListener("singletap", function() {
        $.window.close();
    });
    $.logout.addEventListener("singletap", function() {
        $.window.close();
    });
    $.loading.show();
    setTimeout(function() {
        $.mylabtable.visible = true;
        $.loading.hide();
    }, 3e3);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;