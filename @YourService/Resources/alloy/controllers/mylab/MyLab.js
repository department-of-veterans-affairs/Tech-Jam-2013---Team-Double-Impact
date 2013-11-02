function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "mylab/MyLab";
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
        backgroundImage: "/mylab/header.png",
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
    $.__views.__alloyId10 = Ti.UI.createTableViewSection({
        id: "__alloyId10"
    });
    var __alloyId11 = [];
    __alloyId11.push($.__views.__alloyId10);
    $.__views.__alloyId12 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId12"
    });
    $.__views.__alloyId10.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "Name",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.name = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        right: 28,
        width: 200,
        height: Ti.UI.FILL,
        textAlign: "right",
        id: "name"
    });
    $.__views.__alloyId12.add($.__views.name);
    $.__views.__alloyId14 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId14"
    });
    $.__views.__alloyId10.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "Type",
        id: "__alloyId15"
    });
    $.__views.__alloyId14.add($.__views.__alloyId15);
    $.__views.type = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        right: 28,
        width: 200,
        height: Ti.UI.FILL,
        textAlign: "right",
        id: "type"
    });
    $.__views.__alloyId14.add($.__views.type);
    $.__views.__alloyId16 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId16"
    });
    $.__views.__alloyId10.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "Start Date",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.referenceRange = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        right: 28,
        width: 200,
        height: Ti.UI.FILL,
        textAlign: "right",
        id: "referenceRange"
    });
    $.__views.__alloyId16.add($.__views.referenceRange);
    $.__views.__alloyId18 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId18"
    });
    $.__views.__alloyId10.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "Provider",
        id: "__alloyId19"
    });
    $.__views.__alloyId18.add($.__views.__alloyId19);
    $.__views.provider = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        right: 28,
        width: 200,
        height: Ti.UI.FILL,
        textAlign: "right",
        id: "provider"
    });
    $.__views.__alloyId18.add($.__views.provider);
    $.__views.__alloyId20 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId20"
    });
    $.__views.__alloyId10.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "Location",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.location = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        right: 28,
        width: 200,
        height: Ti.UI.FILL,
        textAlign: "right",
        id: "location"
    });
    $.__views.__alloyId20.add($.__views.location);
    $.__views.__alloyId22 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId22"
    });
    $.__views.__alloyId10.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "Specimen",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.specimen = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        right: 28,
        width: 200,
        height: Ti.UI.FILL,
        textAlign: "right",
        id: "specimen"
    });
    $.__views.__alloyId22.add($.__views.specimen);
    $.__views.__alloyId24 = Ti.UI.createTableViewRow({
        selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
        width: Ti.UI.FILL,
        height: 40,
        backgroundImage: "/mylab/table-row-bg.png",
        id: "__alloyId24"
    });
    $.__views.__alloyId10.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        left: 15,
        width: Ti.UI.SIZE,
        height: Ti.UI.FILL,
        text: "Interpretation",
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    $.__views.interpretation = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            fontFamily: "Helvetica Neue"
        },
        color: "#000",
        right: 28,
        width: 200,
        height: Ti.UI.FILL,
        textAlign: "right",
        id: "interpretation",
        text: "Click For More Details"
    });
    $.__views.__alloyId24.add($.__views.interpretation);
    $.__views.mylabtable = Ti.UI.createTableView({
        top: 80,
        bottom: 40,
        width: Ti.UI.FILL,
        visible: false,
        data: __alloyId11,
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
    $.loading.show();
    var xhr = Ti.Network.createHTTPClient({
        onload: function() {
            $.loading.hide();
            var response = JSON.parse(this.responseText);
            $.mylabtable.visible = true;
            $.name.text = response.testName;
            $.type.text = response.labType;
            $.provider.text = response.orderingProvider;
            $.referenceRange.text = response.referenceRange;
            $.location.text = response.orderingLocation;
            $.specimen.text = response.specimen;
            $.interpretation.addEventListener("singletap", function() {
                alert(response.interpretation);
            });
        },
        onerror: function() {
            Ti.API.info(this.responseText);
        },
        timeout: 1e5
    });
    xhr.open("GET", "http://137.116.81.48:8080/MemberProfileServices/webresources/labTests/memberId=1234");
    xhr.send();
    $.back.addEventListener("singletap", function() {
        $.window.close();
    });
    $.logout.addEventListener("singletap", function() {
        $.window.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;