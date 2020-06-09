var request = require('request');

accessToken = 'EAARgJ7I8ZCMsBAEJwX9Okuzq15qKQUmEmZCYVYWtSdfXxGndfEmnboox88UP1OTnrL6r5j42gqoa4B2HurS113TkOY3Pay34LfqWJp9gUQ7lKnujPl002ySnHyjLplm2ZAWL8abA3K6d8hdckZAxH9yjXA1UUNNtyEsEESn3buRdPHmMBvfUQkgqrkhf9FL0KiPZCbpGfTwZDZD';
function getUserPages () {
	var link = 'https://graph.facebook.com/v7.0/me/accounts?access_token=' + accessToken;
	
	request.get(link, function(error, res, body) {
	var obj = JSON.parse(body);
	var response = JSON.stringify(obj, null, 2);

	console.log(response);
 	if(error) 
 		console.log('Error');
 	else
  		console.log('Success, the page IDs of the users are: ' + obj.data[0].id);
});
}

getUserPages();