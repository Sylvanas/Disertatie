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

function createLocation(lat, lng, when){
	return {latitude: lat, longitude: lng, time: when};
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
	this.sendGeoData;
	this.getLocations;
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
	this.sendGeoData = subclassSendGeoData;
	this.getLocations = subclassGetLocations;
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
	return {message: 'ok', requests: [{id: '4f8e554e96efdd39710205ea', name: '4f8e554e96efdd39710205ea', approved: true},  {id: 'dgw', name: 'dgw', approved: false}, {id: 'ftgsd', name: 'ftgsd', approved: false}]};
}

function subclassSendGeoData(){
	return {message: 'ok'};
}

function subclassGetLocations(){
	return {message: 'ok', locations:[
	 		 	    	 	       	 {id: '123', latitude: '53.340342', longitude: '-6.24312', time: Date.parse(new Date())},
			 	    		         {id: '232', latitude: '53.240342', longitude: '-6.14312', time: Date.parse(new Date())},
			 	    		         {id: '1', latitude: '53.140342', longitude: '-6.24312', time: Date.parse(new Date())},
			 	    		         {id: '12343r234', latitude: '53.140342', longitude: '-6.12312', time: Date.parse(new Date())},
			 	    		         {id: '12341234', latitude: '53.070342', longitude: '-6.11312', time: Date.parse(new Date())},
			 	    		         {id: '12dsfg', latitude: '53.210342', longitude: '-6.26312', time: Date.parse(new Date())},
			 	    		       	 ]};
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
	this.sendGeoData = actualSendGeoData;
	this.getLocations = actualGetLocations;
}

function actualLogIn(){
	var users = getAllUsers();
	if (users.message == "fail") return {message: "fail"};
	for(var i=0;i<users.count;i++){
		if(users.list[i].email == this.parameters[0] && users.list[i].password == this.parameters[1]) return {message: "ok", guid: users.list[i].guid};
	}
	return {message: "fail"};
}

function actualInsertUser(){
	var newUser = createUser();
	newUser['email'] = this.parameters[0];
	newUser['password'] = this.parameters[1];
	newUser['personsList'] = this.parameters[2];
	return insertUser(newUser);
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
		if(user.fields.personsList[i]['approved']){
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

function actualSendGeoData(){
	var userToUpdate = getUser(this.parameters[0]);
	if(userToUpdate.message == "fail") return {message: "fail"};
	var locations = userToUpdate.fields.lastLocations;
	if(locations.length > 5){
		locations = new Array();
	}
	if(locations.length == 5){
		locations.shift();
	}
	var locationToAdd = createLocation(this.parameters[1], this.parameters[2], this.parameters[3]);
	locations.push(locationToAdd);
	userToUpdate.fields.lastLocations = locations;
	var responseFromUpdateUser = updateUser(userToUpdate, this.parameters[0]);
	if(responseFromUpdateUser.message != "ok") return {message: "fail"};
	//manage response
	var response = new Array();
	for(var i=0;i<userToUpdate.fields.personsList.length;i++){
		var currentFriend = getUser(userToUpdate.fields.personsList[i]['id']);
		if(userToUpdate.fields.lastLocations.length > 0){
			var lastFriendLocation = currentFriend.fields.lastLocations[currentFriend.fields.lastLocations.length-1];
      if(KMDistanceBetweenTwoLocations(locationToAdd.latitude, locationToAdd.longitude, lastFriendLocation.latitude, lastFriendLocation.longitude) < 1 && locationToAdd.time - lastFriendLocation.time < 60*1000){
				response.push( currentFriend.guid );
			}  
		} 
	}
	return {message: "ok", friendsIDs: response};
}

function actualGetLocations(){
	var user = getUser(this.parameters[0]);
	if(user.message == "fail") return {message: "fail"};
	return {message: "ok", locations: user.fields.lastLocations};
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

function CloudSendGeoData(){
	var array = new Array();
	array.push($params.accountID);
	array.push($params.lat);
	array.push($params.lon);
	array.push($params.when);
	newClass.parameters = array;
	return newClass.sendGeoData();
}

function CloudGetLocations(){
	var array = new Array();
	array.push($params.accountID);
	newClass.parameters = array;
	return newClass.getLocations();
}

//-------------------------------------------------------------------------------
//custom cloud test functions

function CloudTestFunction(){
	return {message: 'ok'};
}

function CustomClearUserTable(){
	return clearUserTable();
}

function CustomClearTables(){
	CustomClearUserTable();
	return {message : "ok"};
}