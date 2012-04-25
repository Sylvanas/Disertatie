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
		"personsList" : user.personsList,
		"lastLocations" : user.lastLocations}
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
  var users = getAllUsers();
  if (users.message == "fail") return {message : "fail"};
  for(var i=0;i<users.count;i++){
		if(users.list[i].guid == ID){
			return users.list[i];
		}
  }
  return {message: "fail"};
}

function updateUser(newUser,ID){
	try{
		var user = $fh.db({
			"act": "read",
			"type": "UserTable",
			"guid": ID
			});
			var userFields = user.fields;
			userFields.email = newUser.fields.email;
			userFields.password = newUser.fields.password;
			userFields.personsList = newUser.fields.personsList;
			userFields.lastLocations = newUser.fields.lastLocations;
			$fh.db({
			"act" : "update",
			"type" : "UserTable",
			"guid" : ID,
			"fields" : userFields
			});
			return {message: "ok"};	
	}catch(err){return {message: "fail"};}
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
function createUser(){
  var emptyArray = new Array();
  return {email: "", password:"", personsList: emptyArray, lastLocations: emptyArray};
}

function createPerson(personID){
	return {id: personID, name: personID, approved: false, ignoreAlerts: false};
}

//-------------------------------------------------------------------------------
//base class
function adminClass(){
	this.parameters;
	this.register;
	this.logIn;
	this.changePassword;
	this.sendFriendRequest;
	this.getPersons;
	this.getRequestInfo;
	this.editRequest;
	this.getFriendRequests;
}

//-------------------------------------------------------------------------------
//test class
function testClass(){
	this.inheritFrom = adminClass;
	this.inheritFrom();
	this.register = subclassRegister;
	this.logIn = subclassLogIn;
	this.changePassword = subclassChangePassword;
	this.sendFriendRequest = subclassSendFriendRequest;
	this.getPersons = subclassGetPersons;
	this.getRequestInfo = subclassGetRequestInfo;
	this.editRequest = subclassEditRequest;
	this.getFriendRequests = subclassGetFriendRequests;
}

function subclassRegister(){
	return {email: "anEmail" , password: "aPassword", personsList: "", guid: "asr234rasdr23"};
}

function subclassLogIn(){
	return {message: "ok" , guid: "asrwr3asdr23"};
}

function subclassChangePassword(){
	return { message: "ok" };
}

function subclassSendFriendRequest(){
	return { message: "ok" };
}

function subclassGetPersons(){
	return {persons: [{id: 'dgdg', name: 'Spencer', approved: true},  {id: 'dgw', name: 'dgw', approved: false}, {id: 'ftgsd', name: 'ftgsd', approved: false}]};
}

function subclassGetRequestInfo(){
	return {id: 'sdrf3434d345d4sdf3', name: 'Spencer', approved: true, ignoreAlerts: true};
}

function subclassEditRequest(){
	return { message: "ok" };
}

function subclassGetFriendRequests(){
	return {message: 'ok', requests: [{id: '4f8e554e96efdd39710205ea', name: '4f8e554e96efdd39710205ea', approved: true},  {id: 'dgw', name: 'dgw', approved: false}, {id: 'ftgsd', name: 'ftgsd', approved: false}]};;
}

//-------------------------------------------------------------------------------
//actual class
function actualClass(){
	this.inheritFrom = testClass;
	this.inheritFrom();
	this.register = actualRegister;
	this.logIn = actualLogIn;
	this.changePassword = actualChangePassword;
	this.sendFriendRequest = actualSendFriendRequest;
	this.getPersons = actualGetPersons;
	this.getRequestInfo = actualGetRequestInfo;
	this.editRequest = actualEditRequest;
	this.getFriendRequests = actualGetFriendRequests;
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
	return {email: resultTaxi.fields.email, password: resultTaxi.fields.password, personsList: resultTaxi.fields.personsList};
}

function actualInsertUser(){
	var newUser = createUser();
	newUser['email'] = this.parameters[0];
	newUser['password'] = this.parameters[1];
	newUser['personsList'] = this.parameters[2];
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

function actualChangePassword(){
	var userToUpdate = getUser(this.parameters[0]);
	if(userToUpdate.message == "fail") return {message: "fail"};
	userToUpdate.fields.password = this.parameters[1];
	return updateUser(userToUpdate, this.parameters[0]);
}

function actualSendFriendRequest(){
	var userToUpdate = getUser(this.parameters[1]);
	if(userToUpdate.message == "fail") return {message: "fail"};
  var friendRequestAdded = false;
  for(var i=0;i<userToUpdate.fields.personsList.length;i++){
    if(userToUpdate.fields.personsList[i]['id'] == this.parameters[0]){
      friendRequestAdded = true;break;
    }
  }
  if(friendRequestAdded) {
  	 return {message: "exists"};
	 } else {
		 var person = createPerson(this.parameters[0]);
		 userToUpdate.fields.personsList.push(person);
   }
	return updateUser(userToUpdate, this.parameters[1]);
}

function actualGetPersons(){
	var user = getUser(this.parameters[0]);
	if(user.message == "fail") return {message: "fail"};
	var persons = new Array();
	for(var i=0;i<user.fields.personsList.length;i++){
		persons.push(user.fields.personsList[i]);
	}
	return {message: "ok", persons: persons};
}

function actualGetFriendRequests(){
	var user = getUser(this.parameters[0]);
	if(user.message == "fail") return {message: "fail"};
	var persons = new Array();
	for(var i=0;i<user.fields.personsList.length;i++){
		if(user.fields.personsList[i]['approved'] == true){
			persons.push(user.fields.personsList[i]);
		}
	}
	return {message: "ok", requests: persons};
}

function actualGetRequestInfo(){
	var senderUser = getUser(this.parameters[0]);
	if(senderUser.message == "fail") return {message: "fail"};
	for(var i=0;i<senderUser.fields.personsList.length;i++){
	    if(senderUser.fields.personsList[i]['id'] == this.parameters[1]){
	    	return {message: "ok", info: senderUser.fields.personsList[i]};
	    }
	  }
	return {message: "error"};
}

function actualEditRequest(){
	var userToUpdate = getUser(this.parameters[0]);
	if(userToUpdate.message == "fail") return {message: "fail"};
	for(var i=0;i<userToUpdate.fields.personsList.length;i++){
		if(userToUpdate.fields.personsList[i]['id'] == this.parameters[1]['id']){
			userToUpdate.fields.personsList[i]['name'] = this.parameters[1]['name'];
			userToUpdate.fields.personsList[i]['approved'] = this.parameters[1]['approved'];
			userToUpdate.fields.personsList[i]['ignoreAlerts'] = this.parameters[1]['ignoreAlerts'];
			break;
		}
	}
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
	var newUser = createUser();
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

function CloudSendFriendRequest(){
	var array = new Array();
	array.push($params.senderID);
	array.push($params.targetID);
	newClass.parameters = array;
	return newClass.sendFriendRequest();
}

function CloudGetRequests(){
	var array = new Array();
	array.push($params.accountID);
	newClass.parameters = array;
	return newClass.getPersons();
}

function CloudGetRequestInfo(){
	var array = new Array();
	array.push($params.senderID);
	array.push($params.targetID);
	newClass.parameters = array;
	return newClass.getRequestInfo();
}

function CloudEditRequest(){
	var array = new Array();
	array.push($params.senderID);
	array.push($params.request);
	newClass.parameters = array;
	return newClass.editRequest();
}

function CloudGetFriendRequests(){
	var array = new Array();
	array.push($params.accountID);
	newClass.parameters = array;
	return newClass.getFriendRequests();
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