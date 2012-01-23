// Test methods ---------------------------------------------------------------

function resetDB() {
	var taxis = getAllTaxis().list;

	var testLat = 52.25, testLng = -7.12;
	
	for (t in taxis) {
		$fh.db({ "act" : "delete", "type" : "TaxiTable", "guid" : taxis[t].guid});
	}
	
	for (var i = 0; i < 10; i++) {
		insertTaxi({
			username : 'user' + new Date().getTime().toString(),
			password : 'password',
			repeatPassword : 'password',
			name : 'Firstname Surname',
			phone : '080 ' + Math.floor(Math.random()*10000000).toString(),
			company : 'Acme Cabs',
			address : '123 Main Street, Waterford',
			plateNo : Math.floor(Math.random()*10000).toString(),
			makeModel : 'Toyota Avensis',
			colour : 'Silver',
			seats : '4',
			status: 'Available',
			lat: testLat + Math.random() / 100,
			lng: testLng + + Math.random() / 100
		});
	}

	$fh.log( {message:'Reset database'} ); 
	
	return getAllTaxis().list;
}

function getPlacemarks() {
  var lat = 'undefined' !== typeof $params.lat ? $params.lat : 52.88,
      lon = 'undefined' !== typeof $params.lon ? $params.lon : -7.96;
  
  // Add the passed in location to a points array
  var points = [{lat: lat, lon: lon, title: 'My Placemark!'}];
    
  // Push some more closeby points onto the array
  points.push({lat: lat + 0.002, lon: lon - 0.002, title: 'Top Left'});
  points.push({lat: lat + 0.002, lon: lon, title: 'Top Middle'});
  points.push({lat: lat + 0.002, lon: lon + 0.002, title: 'Top Right'});
  
  points.push({lat: lat, lon: lon - 0.002, title: 'Middle Left'});  
  points.push({lat: lat, lon: lon + 0.002, title: 'Middle Right'});
  
  
  points.push({lat: lat - 0.002, lon: lon - 0.002, title: 'Bottom Left'});
  points.push({lat: lat - 0.002, lon: lon, title: 'Bottom Middle'});
  points.push({lat: lat - 0.002, lon: lon + 0.002, title: 'Bottom Right'});
  
  return {points: points};
}

// End of test methods --------------------------------------------------------

var newClass = new fastClass();
var parameters = new Array();

//-------------------------------------------------------------------------------
//database methods
function insertTaxi(taxi){
	$fh.db({
		"act" : "create",
		"type" : "TaxiTable",
		"fields" : {
		"name" : taxi.name,
		"username" : taxi.username,
		"password" : taxi.password,
		"plateNo" : taxi.plateNo,
		"makeModel" : taxi.makeModel,
		"color" : taxi.color,
		"company" : taxi.company,
		"address" : taxi.address,
		"seats" : taxi.seats,
		"disabledAccess" : taxi.disabledAccess,
		"creditCards" :taxi.creditCards,
		"payByMobile" : taxi.payByMobile,
		"phone" : taxi.phone,
		"status" : taxi.status,
		"approved" : taxi.approved,
		"location" : taxi.location,
		"lat" : taxi.lat,
		"lng" : taxi.lng}
		});
	return {message: "ok"};
}

function insertBaseStation(baseStation){
	$fh.db({
		"act" : "create",
		"type" : "BaseStationTable",
		"fields" : {
		"address" : baseStation.address,
		"lat" : baseStation.lat,
		"lng" : baseStation.lng,
		"phone" : baseStation.phone}
		});
	return {message: "ok"};
}

function insertCall(call){
	$fh.db({
		"act" : "create",
		"type" : "CallTable",
		"fields" : {
		"taxiID" : call.taxiID,
		"phoneNumber" : call.phoneNumber,
		"timeStamp" : call.timeStamp,
		"location" : call.location}
		});
	return {message: "ok"};
}

function insertRegion(region){
	$fh.db({
		"act" : "create",
		"type" : "RegionTable",
		"fields" : {
		"lat1" : region.lat1,
		"lng1" : region.lng1,
		"lat2" : region.lat2,
		"lng2" : region.lng2,
		"numTaxis" : region.numTaxis
		}
		});
	return {message: "ok"};
}

function insertAdmin(admin){
	$fh.db({
		"act" : "create",
		"type" : "AdminTable",
		"fields" : {
		"username" : admin.username,
		"password" : admin.password
		}
		});
	return {message: "ok"};
}

function getTaxi(ID){
	try{
	return $fh.db({
		"act": "read",
		"type": "TaxiTable",
		"guid" : ID
		});
	}catch(err){return {message: "fail"};}
}

function getAllTaxis(){
	try{
	$fh.log( {message:'getAllTaxis'} );
	return $fh.db({
		"act": "list",
		"type": "TaxiTable"
		});
	}catch(err){return {message: "fail"};}
}

function getBaseStation(ID){
	try{
	return $fh.db({
		"act": "read",
		"type": "BaseStationTable",
		"guid" : ID
		});
	}catch(err){return {message: "fail"};}
}

function getAllBaseStations(){
	try{
	return $fh.db({
		"act": "list",
		"type": "BaseStationTable"
		});
	}catch(err){return {message: "fail"};}
}

function getCall(ID){
	try{
	return $fh.db({
		"act": "read",
		"type": "CallTable",
		"guid" : ID
		});
	}catch(err){return {message: "fail"};}
}

function getAllCalls(){
	try{
	return $fh.db({
		"act": "list",
		"type": "CallTable"
		});
	}catch(err){return {message: "fail"};}
}

function getRegion(ID){
	try{
		return $fh.db({
			"act": "read",
			"type": "RegionTable",
			"guid" : ID
			});
		}catch(err){return {message: "fail"};}
}

function getRegionID(lat1,lng1,lat2,lng2){
	try{
		var result = $fh.db({
			"act": "list",
			"type": "RegionTable",
			"eq" : {
				"lat1" : lat1,
				"lng1" : lng1,
				"lat2" : lat2,
				"lng2" : lng2
				}
			});
		return result.list[0].guid;
		}catch(err){return {message: "fail"};}
}

function getAllRegions(){
	try{
	return $fh.db({
		"act": "list",
		"type": "RegionTable"
		});
	}catch(err){return {message: "fail"};}
}

function getAdmin(ID){
	try{
		return $fh.db({
			"act": "read",
			"type": "AdminTable",
			"guid" : ID
			});
		}catch(err){return {message: "fail"};}
}

function getAllAdmins(){
	try{
	return $fh.db({
		"act": "list",
		"type": "AdminTable"
		});
	}catch(err){return {message: "fail"};}
}

function getAllCallsForTaxi(ID){
	try{
	return $fh.db({
		"act": "list",
		"type": "CallTable",
		"eq" : { "taxiID" : ID }
		});
	}catch(err){return {message: "fail"};}
}

function updateTaxi(newTaxi,ID){
	var taxi = $fh.db({
		"act": "read",
		"type": "TaxiTable",
		"guid": ID
		});
		var taxiFields = taxi.fields;
		taxiFields.name = newTaxi.fields.name;
		taxiFields.username = newTaxi.fields.username;
		taxiFields.password = newTaxi.fields.password;
		taxiFields.plateNo = newTaxi.fields.plateNo;
		taxiFields.makeModel = newTaxi.fields.makeModel;
		taxiFields.color = newTaxi.fields.color;
		taxiFields.company = newTaxi.fields.company;
		taxiFields.address = newTaxi.fields.address;
		taxiFields.seats = newTaxi.fields.seats;
		taxiFields.disabledAccess = newTaxi.fields.disabledAccess;
		taxiFields.creditCards = newTaxi.fields.creditCards;
		taxiFields.payByMobile = newTaxi.fields.payByMobile;
		taxiFields.phone = newTaxi.fields.phone;
		taxiFields.status = newTaxi.fields.status;
		taxiFields.approved = newTaxi.fields.approved;
		taxiFields.location = newTaxi.fields.location;
		taxiFields.lat = newTaxi.fields.lat;
		taxiFields.lng = newTaxi.fields.lng;
		$fh.db({
		"act" : "update",
		"type" : "TaxiTable",
		"guid" : ID,
		"fields" : taxiFields
		});
		return {message: "ok"};
}

function updateBaseStation(newBaseStation,ID){
	var baseStation = $fh.db({
		"act": "read",
		"type": "BaseStationTable",
		"guid": ID
		});
		var baseStationFields = baseStation.fields;
		baseStationFields.address = newBaseStation.fields.address;
		baseStationFields.phone = newBaseStation.fields.phone;
		baseStationFields.lat = newBaseStation.fields.lat;
		baseStationFields.lng = newBaseStation.fields.lng;
		$fh.db({
		"act" : "update",
		"type" : "BaseStationTable",
		"guid" : ID,
		"fields" : baseStationFields
		});
		return {message: "ok"};
}

function updateCall(newCall,ID){
	var call = $fh.db({
		"act": "read",
		"type": "CallTable",
		"guid": ID
		});
		var callFields = call.fields;
		callFields.taxiID = newCall.fields.taxiID;
		callFields.phoneNumber = newCall.fields.phoneNumber;
		callFields.timeStamp = newCall.fields.timeStamp;
		callFields.location = newCall.fields.location;
		$fh.db({
		"act" : "update",
		"type" : "CallTable",
		"guid" : ID,
		"fields" : callFields
		});
		return {message: "ok"};
}

function updateRegion(newRegion,ID){
	var region = $fh.db({
		"act": "read",
		"type": "RegionTable",
		"guid": ID
		});
		var regionFields = region.fields;
		regionFields.lat1 = newRegion.fields.lat1;
		regionFields.lng1 = newRegion.fields.lng1;
		regionFields.lat2 = newRegion.fields.lat2;
		regionFields.lng2 = newRegion.fields.lng2;
		regionFields.numTaxis = newRegion.fields.numTaxis;
		$fh.db({
		"act" : "update",
		"type" : "RegionTable",
		"guid" : ID,
		"fields" : regionFields
		});
		return {message: "ok"};
}

function updateAdmin(newAdmin,ID){
	var admin = $fh.db({
		"act": "read",
		"type": "AdminTable",
		"guid": ID
		});
		var adminFields = admin.fields;
		adminFields.username = newAdmin.fields.lat1;
		adminFields.password = newAdmin.fields.lng1;
		$fh.db({
		"act" : "update",
		"type" : "AdminTable",
		"guid" : ID,
		"fields" : adminFields
		});
		return {message: "ok"};
}

function deleteTaxi(ID){
	try{
		$fh.db({
			"act": "delete",
			"type": "TaxiTable",
			"guid": ID
			});
		return {message: "ok"};
		}catch(err){return {message: "fail"};}
}

function deleteBaseStation(ID){
	try{
		$fh.db({
			"act": "delete",
			"type": "BaseStationTable",
			"guid": ID
			});
		return {message: "ok"};
		}catch(err){return {message: "fail"};}
}

function deleteCall(ID){
	try{
		$fh.db({
			"act": "delete",
			"type": "CallTable",
			"guid": ID
			});
		return {message: "ok"};
		}catch(err){return {message: "fail"};}
}

function deleteRegion(ID){
	try{
		$fh.db({
			"act": "delete",
			"type": "RegionTable",
			"guid": ID
			});
		return {message: "ok"};
		}catch(err){return {message: "fail"};}
}

function deleteAdmin(ID){
	try{
		$fh.db({
			"act": "delete",
			"type": "AdminTable",
			"guid": ID
			});
		return {message: "ok"};
		}catch(err){return {message: "fail"};}
}

function clearTaxiTable(){
	var result = getAllTaxis();
	if (result.message == "fail") return {message : "fail"};
	for(var i=0;i<result.count;i++)
		deleteTaxi(result.list[i].guid);
	return {message : "ok"};
}

function clearBaseStationTable(){
	var result = getAllBaseStations();
	if (result.message == "fail") return {message : "fail"};
	for(var i=0;i<result.count;i++)
		deleteBaseStation(result.list[i].guid);
	return {message : "ok"};
}

function clearCallTable(){
	var result = getAllCalls();
	if (result.message == "fail") return {message : "fail"};
	for(var i=0;i<result.count;i++)
		deleteCall(result.list[i].guid);
	return {message : "ok"};
}

function clearRegionTable(){
	var result = getAllRegions();
	if (result.message == "fail") return {message : "fail"};
	for(var i=0;i<result.count;i++)
		deleteRegion(result.list[i].guid);
	return {message : "ok"};
}

function clearAdminTable(){
	var result = getAllAdmins();
	if (result.message == "fail") return {message : "fail"};
	for(var i=0;i<result.count;i++)
		deleteAdmin(result.list[i].guid);
	return {message : "ok"};
}

//-------------------------------------------------------------------------------
//database classes

function taxi(){
	this.name="";
	this.username="";
	this.password="";
	this.plateNo="";
	this.makeModel="";
	this.color="";
	this.company="";
	this.address="";
	this.seats="";
	this.disabledAccess="";
	this.creditCards="";
	this.payByMobile="";
	this.phone="";
	this.status="";
	this.approved="";
	this.location="";
	this.lat="";
	this.lng="";
}

function baseStation(){
	this.address="";
	this.lat="";
	this.lng="";
	this.phone="";
}

function call(){
	this.taxiID="";
	this.phoneNumber="";
	this.timeStamp="";
	this.location="";
}

function region(){
	this.lat1="";
	this.lng1="";
	this.lat2="";
	this.lng2="";
	this.numTaxis="";
}

function admin(){
	this.username="";
	this.password="";
}


//-------------------------------------------------------------------------------
//base class
function adminClass(){
	this.parameters;
	this.adminGetTaxiList;
	this.cGetTaxis;
	this.cGetBaseStations;
	this.cRecordCall;
	this.tDriverLogIn;
	this.tRegister;
	this.tUpdateRegistration;
	this.tSetLocation;
	this.tSetStatus;
	this.aAdminLogIn;
	this.aGetTaxis;
	this.aSetApprovalStatus;
	this.aGetTaxisByApprovalStatus;
	this.aGetTaxiDetails;
	this.aSetTaxiDetails;
	this.aGetCallLog;
	this.aSetTaxisPerRegion;
	this.aDeleteTaxisPerRegionEntry;
}//GetTaxisByApprovalStatus

//-------------------------------------------------------------------------------
//test class
function testClass(){
	this.inheritFrom = adminClass;
	this.inheritFrom();
	this.adminGetTaxiList = subclassAdminGetTaxiList;
	this.cGetTaxis = subclassCGetTaxis;
	this.cGetBaseStations = subclassCGetBaseStations;
	this.cRecordCall = subclassCRecordCall;
	this.tDriverLogIn = subclassTDriverLogIn;
	this.tRegister = subclassTRegister;
	this.tUpdateRegistration = subclassTUpdateRegistration;
	this.tSetLocation = subclassTSetLocation;
	this.tSetStatus = subclassTSetStatus;
  	this.aAdminLogIn = subclassAAdminLogIn;
	this.aGetTaxis = subclassAGetTaxis;
	this.aSetApprovalStatus = subclassASetApprovalStatus;
	this.aGetTaxisByApprovalStatus = subclassAGetTaxisByApprovalStatus;
	this.aGetTaxiDetails = subclassAGetTaxiDetails;
	this.aSetTaxiDetails = subclassASetTaxiDetails;
	this.aGetCallLog = subclassAGetCallLog;
	this.aSetTaxisPerRegion = subclassASetTaxisPerRegion;
	this.aDeleteTaxisPerRegionEntry = subclassADeleteTaxisPerRegionEntry;
}

function subclassAdminGetTaxiList(){
	return [{taxiName: "taxiName" , taxiNumber: "123"}, {taxiName: "taxiName2" , taxiNumber: "111" }];
}

function subclassCGetTaxis(){
	//alert("return taxis from location " + this.parameters[0] + " ,with range " + this.parameters[1]);
	return [{taxiName: "taxiName" , taxiNumber: "123"}, {taxiName: "taxiName2" , taxiNumber: "111" }];
}

function subclassCGetBaseStations(){
	//alert("return base stations from location " + this.parameters[0] + " ,with range " + this.parameters[1]);
	return [{baseStationName: "taxiName" , baseStationNumber: "123"}, {baseStationName: "taxiName2" , baseStationNumber: "111" }];
}

function subclassCRecordCall(){
	//taxi ID = this.parameters[0]; location = this.parameters[1]
	return {message: "ok"};
}

function subclassTDriverLogIn(){
	//alert("loggng in with username " + this.parameters[0] + " ,and password " + this.parameters[1]);
	return {message: "ok"};
}

function subclassTRegister(){
	//make a taxi class with these parameters in the actual method
	return {message: "ok"};
}

function subclassTUpdateRegistration(){
	//make a taxi class with these parameters in the actual method
	return {message: "ok"};
}

function subclassTSetLocation(){
	//alert("set location with taxi ID " + this.parameters[0] + " ,and location " + this.parameters[1]);
	return {message: "ok"};
}

function subclassTSetStatus(){
	//taxi ID = this.parameters[0];  status = this.parameters[1]
	return {message: "ok"};
}

function subclassAAdminLogIn(){
	//alert("username: " + this.parameters[0] + " ,password: " + this.parameters[1]);
	return {message: "ok"};
}

function subclassAGetTaxis(){
	return {
		"count": 2,
		"list": [{
		"fields": {
			"name" : "name1",
			"username" : "username1",
			"password" : "password1",
			"plateNo" : "plateNo1",
			"makeModel" : "makeModel1",
			"color" : "color1",
			"company" : "company1",
			"address" : "address1",
			"seats" : "1",
			"disabledAccess" : "yes",
			"creditCards" :"yes",
			"payByMobile" : "yes",
			"phone" : "456",
			"status" : "",
			"approved" : "",
			"location" : "l1",
			"lat": "l1",
			"lng": "l1"},
		"guid": "4e563ea44fe8e7fc19000002",
		"type": "TaxiTable"
		},
		{
			"fields": {
				"name" : "name2",
				"username" : "username2",
				"password" : "password2",
				"plateNo" : "plateNo2",
				"makeModel" : "makeModel2",
				"color" : "color2",
				"company" : "company2",
				"address" : "address2",
				"seats" : "2",
				"disabledAccess" : "yes",
				"creditCards" :"yes",
				"payByMobile" : "yes",
				"phone" : "4562",
				"status" : "",
				"approved" : "",
				"location" : "l2",
				"lat": "l1",
				"lng": "l1"
			},
			"guid": "4e563ea44fe8e7fc19000202",
			"type": "TaxiTable"
			}]
		};
}

function subclassAGetTaxisByApprovalStatus(){
	return subclassAGetTaxis();
}

function subclassASetApprovalStatus(){
	return {message: "ok"};
}

function subclassGetTaxisByApprovalStatus(){
	return [{taxiID: "345425345123", name: "n1" , username: "un1", address: "ad1", company: "c1", plateNo: "ID1", phone: "phone1", creditCards: "yes", disabledAccess: "no"}, 
	        {taxiID: "345ertg45123", name: "n2" , username: "un2", address: "ad2", company: "c2", plateNo: "ID2", phone: "phone2", creditCards: "no", disabledAccess: "yes"}];
}

function subclassAGetTaxiDetails(){
	return [{taxiID: "345425345123", name: "n1", username: "un1", address: "ad1",
		company: "c1", plateNo: "ID1", phone: "phone1", creditCards: "yes", disabledAccess : "yes"}];
}

function subclassASetTaxiDetails(){
	return {message: "ok"};
}

function subclassAGetCallLog(){
	return [{timeStamp: new Date(), phoneNumber: "435", location: "gjtyu"}, {date: new Date() , mobileNumber: "123", Location: "stree sdfsd, no. 234"}];
}

function subclassASetTaxisPerRegion(){
	return {message: "ok"};
}

function subclassADeleteTaxisPerRegionEntry(){
	return {message : "fail"};
}

//-------------------------------------------------------------------------------
//helper functions

function degreesToRadians(degrees){
	return degrees*Math.PI/180;
}

function KMDistanceBetweenTwoLocations(loc1lat,loc1lng,loc2lat,loc2lng){
	var R = 6371;
	var dLat = degreesToRadians(loc2lat-loc1lat);
	var dLon = degreesToRadians(loc2lng-loc1lng);
	var lat1 = degreesToRadians(loc1lat);
	var lat2 = degreesToRadians(loc2lat);
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	return R * c;	
}

//-------------------------------------------------------------------------------
//actual class
function actualClass(){
	this.inheritFrom = testClass;
	this.inheritFrom();
	this.adminGetTaxiList = actualAdminGetTaxiList;
	this.cGetTaxis = actualCGetTaxis;
	this.cGetBaseStations = actualCGetBaseStations;
	this.cRecordCall = actualCRecordCall;
	this.tDriverLogIn = actualTDriverLogIn;
	this.tRegister = actualTRegister;
	this.tUpdateRegistration = actualTUpdateRegistration;
	this.tSetLocation = actualTSetLocation;
	this.tSetStatus =  actualTSetStatus;
  	this.aAdminLogIn = actualAAdminLogIn;
	this.aGetTaxis = actualAGetTaxis;
	this.aSetApprovalStatus = actualASetApprovalStatus;
	this.aGetTaxisByApprovalStatus = actualGetTaxisByApprovalStatus;
	this.aGetTaxiDetails = actualAGetTaxiDetails;
	this.aSetTaxiDetails = actualASetTaxiDetails;
	this.aGetCallLog = actualAGetCallLog;
	this.aSetTaxisPerRegion = actualASetTaxisPerRegion;
	this.aDeleteTaxisPerRegionEntry = actualADeleteTaxisPerRegionEntry;
}

function actualAdminGetTaxiList() {
	return [{taxiName: "-" , taxiNumber: "-"}];
}

function actualCGetTaxis(){
	//lat = this.parameters[0] ; lng = this.parameters[1] ; range = this.parameters[2]
	var taxis = getAllTaxis();
	if (taxis.message == "fail") return {message : "fail"};
	var result = [];
	for(var i=0;i<taxis.count;i++){
		if(taxis.list[i].fields.lat  != "" && taxis.list[i].fields.lng != "")
			if(KMDistanceBetweenTwoLocations(this.parameters[0],this.parameters[1],taxis.list[i].fields.lat,taxis.list[i].fields.lng) <= this.parameters[2])
		result.push({taxiID: taxis.list[i].guid, name: taxis.list[i].fields.name, username: taxis.list[i].fields.username, address: taxis.list[i].fields.address,
			company: taxis.list[i].fields.company, plateNo: taxis.list[i].fields.plateNo, phone: taxis.list[i].fields.phone});
	}
	return {taxis: result};
}

function actualCGetBaseStations(){
	//lat = this.parameters[0] ; lng = this.parameters[1] ; range = this.parameters[2]
	var baseStations = getAllBaseStations();
	if(baseStations.message == "fail") return {message:"fail"};
	var result = [];
	for(var i=0;i<baseStations.count;i++)
		if(baseStations.list[i].fields.lat != "" && baseStations.list[i].fields.lng != "")
			if(KMDistanceBetweenTwoLocations(this.parameters[0],this.parameters[1],baseStations.list[i].fields.lat,baseStations.list[i].fields.lng) <= this.parameters[2])
				result.push({baseStationID: baseStations.list[i].guid, address: baseStations.list[i].fields.address, phone: baseStations.list[i].fields.phone,
					lat: baseStations.list[i].fields.lat, lng: baseStations.list[i].fields.lng});
	return {baseStations: result};
}

function actualCRecordCall(){
	//taxi ID = this.parameters[0] ; location = this.parameters[1]
	var newCall = new call();
	newCall.taxiID = this.parameters[0];
	var resultTaxi = getTaxi(this.parameters[0]);
	newCall.phoneNumber = resultTaxi.fields.phone;
	newCall.timeStamp = new Date();
	newCall.location = this.parameters[1];
	return insertCall(newCall);
}

function actualTDriverLogIn(){
	//username = this.parameters[0] ; password = this.parameters[1]
	var taxis = getAllTaxis();
	if (taxis.message == "fail") return {message : "fail"};
	for(var i=0;i<taxis.count;i++){
		if(taxis.list[i].fields.username == this.parameters[0] && taxis.list[i].fields.password == this.parameters[1])
			return {message: "ok"};
	}
	return {message : "fail"};
}

function actualTRegister(){
	var newTaxi = new taxi();
	newTaxi.name = this.parameters[0];
	newTaxi.username = this.parameters[1];
	newTaxi.password = this.parameters[2];
	newTaxi.plateNo = this.parameters[3];
	newTaxi.makeModel = this.parameters[4];
	newTaxi.color = this.parameters[5];
	newTaxi.company = this.parameters[6];
	newTaxi.address = this.parameters[7];
	newTaxi.seats = this.parameters[8];
	newTaxi.disabledAccess = this.parameters[9];
	newTaxi.creditCards = this.parameters[10];
	newTaxi.payByMobile = this.parameters[11];
	newTaxi.phone = this.parameters[12];
	return insertTaxi(newTaxi);
}

function actualTUpdateRegistration(){
	var newTaxi = new taxi();
	newTaxi.name = this.parameters[1];
	newTaxi.username = this.parameters[2];
	newTaxi.password = this.parameters[3];
	newTaxi.plateNo = this.parameters[4];
	newTaxi.makeModel = this.parameters[5];
	newTaxi.color = this.parameters[6];
	newTaxi.company = this.parameters[7];
	newTaxi.address = this.parameters[8];
	newTaxi.seats = this.parameters[9];
	newTaxi.disabledAccess = this.parameters[10];
	newTaxi.creditCards = this.parameters[11];
	newTaxi.payByMobile = this.parameters[12];
	newTaxi.phone = this.parameters[13];
	return updateTaxi(newTaxi, this.parameters[0]);
}

function actualTSetLocation(){
	//taxi ID = this.parameters[0] ; lat = this.parameters[1] ; lng = this.parameters[2]
	var resultTaxi = getTaxi(this.parameters[0]);
	if(resultTaxi.message == "fail") return {message: "fail"};
	resultTaxi.fields.lat = this.parameters[1];
	resultTaxi.fields.lng = this.parameters[2];
	return updateTaxi(resultTaxi, this.parameters[0]);
}

function actualTSetStatus(){
	//taxi plateNo " + this.parameters[0] ; status = this.parameters[1]
	var resultTaxi = getTaxi(this.parameters[0]);
	if(resultTaxi.message == "fail") return {message: "fail"};
	resultTaxi.fields.status = this.parameters[1];
	return updateTaxi(resultTaxi, this.parameters[0]);
}

function actualAAdminLogIn(){
	//username = this.parameters[0]; ,password = this.parameters[1]
	var taxis = getAllTaxis();
	if (taxis.message == "fail") return {message: "fail"};
	for(var i=0;i<taxis.count;i++){
		if(taxi.list[i].username == this.parameters[0] && taxi.list[i].password == this.parameters[1]) return {message: "ok"};
	}
	return {message: "fail"};
}

function actualAGetTaxis(){
	var taxis = getAllTaxis();
	if (taxis.message == "fail") return {message : "fail"};
	var result = [];
	for(var i=0;i<taxis.count;i++){
		result.push({taxiID: taxis.list[i].guid, name: taxis.list[i].fields.name, username: taxis.list[i].fields.username, address: taxis.list[i].fields.address,
			company: taxis.list[i].fields.company, plateNo: taxis.list[i].fields.plateNo, phone: taxis.list[i].fields.phone});
	}
	return {taxis: result};
}

function actualASetApprovalStatus(){
	//taxi with ID = this.parameters[0] ; approved = this.parameters[1]
	var updatedTaxi = getTaxi(this.parameters[0]);
	if(updatedTaxi.message == "fail") return {message: "fail"};
	updatedTaxi.fields.approved = this.parameters[1];
	return updateTaxi(updatedTaxi,this.parameters[0]);
}

function actualGetTaxisByApprovalStatus(){
	//approved = this.parameters[0]
	var taxis = getAllTaxis();
	if (taxis.message == "fail") return {message : "fail"};
	var result = [];
	for(var i=0;i<taxis.count;i++){
		if(taxis.list[i].fields.approved == this.parameters[0])
		result.push({taxiID: taxis.list[i].guid, name: taxis.list[i].fields.name, username: taxis.list[i].fields.username, address: taxis.list[i].fields.address,
			company: taxis.list[i].fields.company, plateNo: taxis.list[i].fields.plateNo, phone: taxis.list[i].fields.phone});
	}
	return {taxis: result};
}

function actualAGetTaxiDetails(){
	var resultTaxi  = getTaxi(this.parameters[0]);
	if (resultTaxi.message == "fail") return {message: "fail"};
	return {name: resultTaxi.fields.name, username: resultTaxi.fields.username, plateNo: resultTaxi.fields.plateNo,
		makeModel: resultTaxi.fields.makeModel, color: resultTaxi.fields.color, company: resultTaxi.fields.company, address: resultTaxi.fields.address,
		seats: resultTaxi.fields.seats, disabledAccess: resultTaxi.fields.disabledAccess, creditCards: resultTaxi.fields.creditCards, payByMobile: resultTaxi.fields.payByMobile, 
		phone: resultTaxi.fields.phone, status: resultTaxi.fields.status, approved: resultTaxi.fields.approved, location: resultTaxi.fields.location, lat: resultTaxi.fields.lat, lng: resultTaxi.fields.lng};
}

function actualASetTaxiDetails(){
	var updatedTaxi = getTaxi(this.parameters[0]);
	if(updatedTaxi.message == "fail") return {message: "fail"};
	updatedTaxi.fields.name = this.parameters[1];
	updatedTaxi.fields.username = this.parameters[2];
	updatedTaxi.fields.address = this.parameters[3];
	updatedTaxi.fields.company = this.parameters[4];
	updatedTaxi.fields.plateNo = this.parameters[5];
	updatedTaxi.fields.creditCards = this.parameters[6];
	updatedTaxi.fields.disabledAccess = this.parameters[7];
	return updateTaxi(updatedTaxi,this.parameters[0]);
}

function actualAGetCallLog(){
	//taxi  ID = this.parameters[0]
	var resultCalls = getAllCalls();
	if (resultCalls.message == "fail") return {message: "fail"};
	var result = [];
	for(var i=0;i<resultCalls.count;i++){
		if(resultCalls.list[i].fields.taxiID == this.parameters[0])
			result.push({taxiID: resultCalls.list[i].fields.taxiID, timeStamp: resultCalls.list[i].fields.timeStamp, phoneNumber: resultCalls.list[i].fields.phoneNumber, location: resultCalls.list[i].fields.location});
	}
	return  {calls: result};
}

/*//called with a RegionId pamrameter
function actualASetTaxisPerRegion(){
	// region ID = this.parameters[0] ; numTaxis = this.parameters[1]  
	var updatedRegion = getRegion(this.parameters[0]);
	if (updatedRegion.message == "fail") return {message: "fail"};
	updatedRegion.fields.numTaxis = this.parameters[1];
	return updateRegion(updatedRegion, this.parameters[0]);
}*/

function actualASetTaxisPerRegion(){
	// lat1,lng1,at2,lng2 = this.parameters[0,1,2,3] ; numTaxis = this.parameters[1]  
	var regionID = getRegionID(this.parameters[0],this.parameters[1],this.parameters[2],this.parameters[3]);
	var updatedRegion = getRegion(regionID);
	if (regionID.message == "fail") return {message: "fail"};
	updatedRegion.fields.numTaxis = this.parameters[4];
	return updateRegion(updatedRegion, regionID);
}

function actualADeleteTaxisPerRegionEntry(){
	// region ID = this.parameters[0]
	return deleteRegion(this.parameters[0]);
}

//-------------------------------------------------------------------------------
//fast class
function fastClass(){
	this.inheritFrom = actualClass;
	this.inheritFrom();
	this.cGetTaxis = fastCGetTaxis;
}

function fastCGetTaxis(){
	//lat = this.parameters[0] ; lng = this.parameters[1] ; range = this.parameters[2]
	var taxis =  $fh.db({
		"act": "list",
		"type": "TaxiTable",
		"ne" : {"lat" : "", "lng" : ""}
		//,"le" : {"lat" : (this.parameters[0] + 100)},
		//"ge" : {"lat" : (this.parameters[0] - 100)+''}
		});
	if (taxis.message == "fail") return {message : "fail"};
	var result = [];
	for(var i=0;i<taxis.count;i++){
			if(KMDistanceBetweenTwoLocations(this.parameters[0],this.parameters[1],taxis.list[i].fields.lat,taxis.list[i].fields.lng) <= this.parameters[2])
		result.push({taxiID: taxis.list[i].guid, name: taxis.list[i].fields.name, username: taxis.list[i].fields.username, address: taxis.list[i].fields.address,
			company: taxis.list[i].fields.company, plateNo: taxis.list[i].fields.plateNo, phone: taxis.list[i].fields.phone});
	}
	return {taxis: result};
}

//-------------------------------------------------------------------------------
//interface
function GetTaxiList(){
	return newClass.adminGetTaxiList();
}

function CloudGetTaxisWithRange(){
	var array = new Array();
	array.push($params.lat);
	array.push($params.lng);
	array.push($params.range);
	newClass.parameters = array;
	return newClass.cGetTaxis();
}

function CloudGetBaseStationsWithRange(){
	var array = new Array();
	array.push($params.lat);
	array.push($params.lng);
	array.push($params.range);
	newClass.parameters = array;
	return newClass.cGetBaseStations();
}

function CloudRecordCall(){
	var array = new Array();
	array.push($params.taxiID);
	array.push($params.location);
	newClass.parameters = array;
	return newClass.cRecordCall();
}

function CloudDriverLogIn(){
	var array = new Array();
	array.push($params.username);
	array.push($params.password);
	newClass.parameters = array;
	return newClass.tDriverLogIn();
}

function CloudRegister(){
	var array = new Array();
	array.push($params.name);
	array.push($params.username);
	array.push($params.password);
	array.push($params.plateNo);
	array.push($params.makeModel);
	array.push($params.color);
	array.push($params.company);
	array.push($params.address);
	array.push($params.seats);
	array.push($params.disabledAccess);
	array.push($params.creditCards);
	array.push($params.payByMobile);
	array.push($params.phone);
	newClass.parameters = array;
	return newClass.tRegister();
}

function CloudUpdateRegistration(){
	var array = new Array();
	array.push($params.taxiID);
	array.push($params.name);
	array.push($params.username);
	array.push($params.password);
	array.push($params.taxiNo);
	array.push($params.makeModel);
	array.push($params.color);
	array.push($params.company);
	array.push($params.address);
	array.push($params.seats);
	array.push($params.disabledAccess);
	array.push($params.creditCards);
	array.push($params.payByMobile);
	array.push($params.phone);
	newClass.parameters = array;
	return newClass.tUpdateRegistration();
}

function CloudSetLocation(){
	var array = new Array();
	array.push($params.taxiID);
	array.push($params.lat);
	array.push($params.lng);
	newClass.parameters = array;
	return newClass.tSetLocation();
}

function CloudSetStatus(){
	var array = new Array();
	array.push($params.taxiID);
	array.push($params.status);
	newClass.parameters = array;
	return newClass.tSetStatus();
}

function CloudAdminLogIn(){
	//var username = $params.username , password = $params.password;
	var admins = getAllAdmins();
	if (admins.message == "fail") return {message : "fail"};
	for(var i=0;i<admins.count;i++)
		if(admins.list[i].fields.username==$params.username && admins.list[i].fields.password==$params.password)
			return {message : "ok"};
	return {message : "fail"};
}

function CloudGetTaxis(){
	return newClass.aGetTaxis();
}

function CloudSetApprovalStatus(){
	var array = new Array();
	array.push($params.taxiID);
	array.push($params.approved);
	newClass.parameters = array;
	return newClass.aSetApprovalStatus();
}

function CloudGetTaxisByApprovalStatus(){
	var array = new Array();
	array.push($params.approved);
	newClass.parameters = array;
	return newClass.aGetTaxisByApprovalStatus();
}

function CloudGetTaxiDetails(){
	var taxiID = $params.taxiID;
	var array = new Array();
	array.push(taxiID);
	newClass.parameters = array;
	return newClass.aGetTaxiDetails();
}

function CloudSetTaxiDetails(){
	var array = new Array();
	array.push($params.taxiID);
	array.push($params.name);
	array.push($params.username);
	array.push($params.address);
	array.push($params.company);
	array.push($params.plateNo);
	array.push($params.creditCards);
	array.push($params.disabledAccess);
	newClass.parameters = array;
	return newClass.aSetTaxiDetails();
}

function CloudGetCallLog(){
	var array = new Array();
	array.push($params.taxiID);
	newClass.parameters = array;
	return newClass.aGetCallLog();
}

function CloudSetTaxisPerRegion(){
	var array = new Array();
	//array.push($params.regionID);
	array.push($params.lat1);
	array.push($params.lng1);
	array.push($params.lat2);
	array.push($params.lng2);
	array.push($params.numTaxis);
	newClass.parameters = array;
	return newClass.aSetTaxisPerRegion();
}

function CloudDeleteTaxisPerRegionEntry(){
	var array = new Array();
	array.push($params.regionID);
	newClass.parameters = array;
	return newClass.aDeleteTaxisPerRegionEntry();
}

//-------------------------------------------------------------------------------
//custom cloud test functions
function CustomClearTaxiTable(){
	return clearTaxiTable();
}

function CustomClearBaseStationTable(){
	return clearBaseStationTable();
}

function CustomClearCallTable(){
	return clearCallTable();
}

function CustomClearRegionTable(){
	return clearRegionTable();
}

function CustomClearAdminTable(){
	return clearAdminTable();
}

function CustomClearTables(){
	CustomClearTaxiTable();
	CustomClearBaseStationTable();
	CustomClearCallTable();
	CustomClearRegionTable();
	CustomClearAdminTable();
	return {message : "ok"};
}

function CustomInsertBaseStation(){
	var newBaseStation = new baseStation();
	newBaseStation.address = $params.address;
	newBaseStation.lat = $params.lat;
	newBaseStation.lng = $params.lng;
	newBaseStation.phone = $params.phone;
	return insertBaseStation(newBaseStation);
}

function CustomInsertRegion(){
	var newRegion = new region();
	newRegion.lat1 = $params.lat1;
	newRegion.lat2 = $params.lat2;
	newRegion.lng1 = $params.lng1;
	newRegion.lng2 = $params.lng2;
	return insertRegion(newRegion);
}

function CustomInsertAdmin(){
	var newAdmin = new admin();
	newAdmin.username = $params.username;
	newAdmin.password = $params.password;
	return insertAdmin(newAdmin);
}

function CustomGetRegions(){
	var regions = getAllRegions();
	if (regions.message == "fail") return {message : "fail"};
	var result = [];
	for(var i=0;i<regions.count;i++)
		result.push({regionID: regions.list[i].guid, lat1: regions.list[i].fields.lat1, lng1: regions.list[i].fields.lng1,
			lat2: regions.list[i].fields.lat2, lng2: regions.list[i].fields.lng2, numTaxis: regions.list[i].fields.numTaxis});
	return {regions: result};
}

function CustomGetAdmins(){
	var admins = getAllAdmins();
	if (admins.message == "fail") return {message : "fail"};
	var result = [];
	for(var i=0;i<admins.count;i++)
		result.push({adminID: admins.list[i].guid, username: admins.list[i].fields.username, password: admins.list[i].fields.password});
	return {admins: result};
}

function CustomDeleteTaxi(){
	deleteTaxi($params.taxiID);
	return {message: "deleted"};
}