$.loading.show();
var xhr = Ti.Network.createHTTPClient({
onload : function(e) {
	$.loading.hide();
	var response = JSON.parse(this.responseText);
	$.mylabtable.visible = true;
    $.name.text = response.testName;
    $.type.text = response.labType;
    $.provider.text = response.orderingProvider;
    $.referenceRange.text = response.referenceRange;
	$.location.text = response.orderingLocation;
	$.specimen.text = response.specimen;
	$.interpretation.addEventListener('singletap', function(e){
		alert(response.interpretation);
	});
},
onerror : function(e) {
	Ti.API.info(this.responseText);
},
timeout : 100000 /* in milliseconds */
});

xhr.open("GET", "http://137.116.81.48:8080/MemberProfileServices/webresources/labTests/memberId=1234");
xhr.send();

$.back.addEventListener('singletap', function(e) {
	$.window.close();
});
$.logout.addEventListener('singletap', function(e){
	$.window.close();
});