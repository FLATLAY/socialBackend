var request = require('request');
var paging = require('./getPages.js');

const accessToken = paging.accessToken;

async function getInstagram () {
	const pageID = await paging.getUserPages();
	
	// console.log(pageID);
	var link = 'https://graph.facebook.com/v7.0/' + pageID + '?fields=instagram_business_account&access_token=' + accessToken;
	
	request.get(link, function(error, res, body) {
	var obj = JSON.parse(body);
	var response = JSON.stringify(obj, null, 2);

	console.log(response);
 	if(error) 
 		console.log('Error');
 	else
  		console.log('Success, the IDs of the Instagram accounts are: ' + obj.data[0].id);
});
}


getInstagram();
