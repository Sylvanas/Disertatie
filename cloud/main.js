var newClass = new actualClass();
var parameters = new Array();

//-------------------------------------------------------------------------------
//database methods
function insertUser(user){
  var insertedUser = $fh.db({
		"act" : "create",
		"type" : "UserTable",
		"fields" : {
		"email" : user.email,
		"password" : user.password,
		"contactList" : user.contactList}
		});
	return {message: "ok", guid: insertedUser.guid};
}

function getAllUsers(){
	try{
	$fh.log( {message:'getAllUsers'} );
	return $fh.db({
		"act": "list",
		"type": "UserTable"
		});
	}catch(err){return {message: "fail"};}
}

function getUser(ID){
	try{
	return $fh.db({
		"act": "read",
		"type": "UserTable",
		"guid" : ID
		});
	}catch(err){return {message: "fail"};}
}

function updateUser(newUser,ID){
		var user = $fh.db({
			"act": "read",
			"type": "UserTable",
			"guid": ID
			});
			var userFields = user.fields;
			userFields.email = newUser.fields.name;
			userFields.password = newUser.fields.password;
			userFields.contactList = newUser.fields.plateNo;
			$fh.db({
			"act" : "update",
			"type" : "UserTable",
			"guid" : ID,
			"fields" : userFields
			});
			return {message: "ok"};		
}

function deleteUser(ID){
	try{
		$fh.db({
			"act": "delete",
			"type": "UserTable",
			"guid": ID
			});
		return {message: "ok"};
	}catch(err){return {message: "fail"};}
}

function clearUserTable(){
	var result = getAllUsers();
	if (result.message == "fail") return {message : "fail"};
	for(var i=0;i<result.count;i++)
		deleteUser(result.list[i].guid);
	return {message : "ok"};
}

//-------------------------------------------------------------------------------
//database classes

function user(){
	this.email="";
	this.password="";
	this.contactList = [];
}

//-------------------------------------------------------------------------------
//base class
function adminClass(){
	this.parameters;
	this.register;
	this.logIn;
	this.changePassword;
}

//-------------------------------------------------------------------------------
//test class
function testClass(){
	this.inheritFrom = adminClass;
	this.inheritFrom();
	this.register = subclassRegister;
	this.logIn = subclassLogIn;
	this.changePassword = subclassChangePassword;
}

function subclassRegister(){
	return {email: "anEmail" , password: "aPassword", contactList: "", guid: "asr234rasdr23"};
}

function subclassLogIn(){
	return {message: "ok" , guid: "asrwr3asdr23"};
}

function subclassChangePassword(){
	return { message: "ok" };
}

//-------------------------------------------------------------------------------
//actual class
function actualClass(){
	this.inheritFrom = testClass;
	this.inheritFrom();
	this.register = actualRegister;
	this.logIn = actualLogIn;
	this.changePassword = actualChangePassword;
}

function actualLogIn(){
	var users = getAllUsers();
	if (users.message == "fail") return {message: "fail"};
	for(var i=0;i<users.count;i++){
		if(users.list[i].email == this.parameters[0] && users.list[i].password == this.parameters[1]) return {message: "ok", guid: users.list[i].guid};
	}
	return {message: "fail"};
}

function actualGetUsers(){
	var users = getAllUsers();
	if (users.message == "fail") return {message : "fail"};
	var result = [];
	for(var i=0;i<users.count;i++){
		result.push({taxiID: users.list[i].guid, name: users.list[i].fields.name, username: taxis.list[i].fields.username, address: taxis.list[i].fields.address,
			company: taxis.list[i].fields.company, plateNo: taxis.list[i].fields.plateNo, phone: taxis.list[i].fields.phone});
	}
	return {users: result};
}

function actualGetUser(){
	var resultUser  = getUser(this.parameters[0]);
	if (resultUser.message == "fail") return {message: "fail"};
	return {email: resultTaxi.fields.email, password: resultTaxi.fields.password, contactList: resultTaxi.fields.contactList};
}

function actualInsertUser(){
	var newUser = new user();
	newUser.email = this.parameters[0];
	newUser.password = this.parameters[1];
	newUser.contactList = this.parameters[2];
	return insertUser(newUser);
}

function actualAGetTaxiDetails(){
	var resultTaxi  = getTaxi(this.parameters[0]);
	if (resultTaxi.message == "fail") return {message: "fail"};
	return {name: resultTaxi.fields.name, username: resultTaxi.fields.username, plateNo: resultTaxi.fields.plateNo,
		makeModel: resultTaxi.fields.makeModel, color: resultTaxi.fields.color, company: resultTaxi.fields.company, address: resultTaxi.fields.address,
		seats: resultTaxi.fields.seats, disabledAccess: resultTaxi.fields.disabledAccess, creditCards: resultTaxi.fields.creditCards, payByMobile: resultTaxi.fields.payByMobile, 
		phone: resultTaxi.fields.phone, status: resultTaxi.fields.status, approved: resultTaxi.fields.approved, location: resultTaxi.fields.location, lat: resultTaxi.fields.lat, lng: resultTaxi.fields.lng};
}

function actualUpdateUser(){
	var updatedUser = getUser(this.parameters[0]);
	if(updatedUser.message == "fail") return {message: "fail"};
	updatedUser.fields.email = this.parameters[1];
	updatedUser.fields.password = this.parameters[2];
	updatedUser.fields.contactList = this.parameters[3];
	return updateUser(updatedUser,this.parameters[0]);
}

function actualChangePassword(){
	var userToUpdate = getUser(this.parameters[0]);
	if(userToUpdate.message == "fail") return {message: "fail"};
	userToUpdate.fields.password = this.parameters[1];
	return updateUser(userToUpdate, this.parameters[0]);
}

function actualDeleteUser(){
	return deleteUser(this.parameters[0]);
}

function actualRegister(){
	var users = getAllUsers();
	if (users.message == "fail") return {message : "fail"};
	for(var i=0;i<users.count;i++){
		if(users.list[i].fields.email == this.parameters[0]){
			return {message: "fail"};
		}
	}
	var newUser = new user();
	newUser.email = this.parameters[0];
	newUser.password = this.parameters[1];
	return insertUser(newUser);
}

function actualLogIn(){
	var users = getAllUsers();
	if (users.message == "fail") return {message : "fail"};
	for(var i=0;i<users.count;i++){
		if(users.list[i].fields.email == this.parameters[0] && users.list[i].fields.password == this.parameters[1]){
			return {message: "ok", guid: users.list[i].guid};
		}
	}
	return {message: "fail"};
}

//-------------------------------------------------------------------------------
//fast class
function fastClass(){
	this.inheritFrom = actualClass;
	this.inheritFrom();
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
//interface

function CloudRegister(){
	var array = new Array();
	array.push($params.email);
	array.push($params.password);
	newClass.parameters = array;
	return newClass.register();
}

function CloudLogIn(){
	var array = new Array();
	array.push($params.email);
	array.push($params.password);
	newClass.parameters = array;
	return newClass.logIn();
}

function CloudChangePassword(){
	var array = new Array();
	array.push($params.accountID);
	array.push($params.password);
	newClass.parameters = array;
	return newClass.changePassword();
}

//-------------------------------------------------------------------------------
//custom cloud test functions

function CustomClearUserTable(){
	return clearUserTable();
}

function CustomClearTables(){
	CustomClearUserTable();
	return {message : "ok"};
}