const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

request('https://jsonplaceholder.typicode.com/users/1', function (error, response, body){
    if(error){
        console.log("<--------------- ERROR! --------------->");
        console.log(error);
    } else if(response.statusCode == 200){
        console.log("Response recieved");
        var parseData = JSON.parse(body);
        console.log(parseData['name']);
        console.log();
        console.log("Name:    \t" + parseData.name);
        console.log("Username:\t" + parseData.username);
        console.log("Email:   \t" + parseData.email);
        console.log("Street:  \t" + parseData.address.street);
        console.log("Suite:   \t" + parseData.address.suite);
        console.log("City:    \t" + parseData.address.city);
        console.log("Zipcode: \t" + parseData.address.zipcode);
        console.log("Phone:   \t" + parseData.phone);
        console.log("Website: \t" + parseData.website);
    }
});
