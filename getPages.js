var request = require('request');
var pageID = '';

const accessToken = '';

var getUserPages = function () {
	var link = 'https://graph.facebook.com/v7.0/me/accounts?access_token=' + accessToken;
	
	request.get(link, function(error, res, body) {
	var obj = JSON.parse(body);
	var response = JSON.stringify(obj, null, 2);

	console.log(response);
 	if(error) 
 		console.log('Error');
 	else {
 		pageID = obj.data[0].id;
 		exports.pageID = pageID;
  		console.log('Success, the page IDs of the users are: ' + obj.data[0].id);
 	}
});
}

module.exports = {getUserPages : getUserPages};

// getUserPages();