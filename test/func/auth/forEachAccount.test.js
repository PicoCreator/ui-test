// Use the loginAccount function
TEST.run("func/auth/loginAccount");

/**
*
* Utility function which iterates across each account
* given inside an object with email/password pair.
*
* And execute the given callback function, with those parameters.
*
* @param   accountObject   containing email-to-password key value pair
* @param   func            callback function to loop using
*
**/
function forEachAccount( accountObject, func ) {
	// Iterate each email-pass pair
	for(var email in accountObject) {
		if(accountObject.hasOwnProperty(email)) {
        	// Get the password,
        	var pass = accountObject[email];
        	// Login
        	loginAccount( email, pass );
        	// Callback function
        	func(email, pass);
        }
    }
}