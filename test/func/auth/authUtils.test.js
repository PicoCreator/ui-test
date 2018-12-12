////////////////////////////////////////////////
//
//  Authentication utility functions
//
////////////////////////////////////////////////

/**
 * Clears all authentication information inside the browser.
 * And redirects to the login page
 */
function resetSession() {
	// Go to the site
	I.goTo( DATA.site );

	// Clear all localstorage and cookies
	//
	// cookies alone is not enough as the site uses
	// localstorage to store auth details
	//
	// Done twice to work around race conditions
	TEST.webdriver().execute("localStorage.clear();");
	UI.COOKIE.deleteAll();

	I.wait(1);

	TEST.webdriver().execute("localStorage.clear();");
	UI.COOKIE.deleteAll();

	// Go to the login page
	I.goTo( DATA.site );
}

/**
 * Login macro function, this forcefully clear the cookie
 * prior to executing the required login steps
 *
 * @param   email  to use for authentication
 * @param   pass   to use for authentication
 *
 */
function loginAccount(email, pass) {
	// Reset any current login session if found
	resetSession();

	// Then do more stuff, like login
	I.fill("Email",    email || DATA.email );
	I.fill("Password", pass  || DATA.pass  );
	I.click("Login");

	// Does a login redirection check
	I.dontSee("Login")


	// Looping through the "Open" check
	if( !I.see("Open") ) {
		// Looping the login button check (in case of slowdown)
		for( let i=0; i<10; ++i ) {
			if( I.see$("Open") ) {
				break;
			}
			TEST.log.info("WARNING : Login is taking much longer then expected");
		}
	}

	I.must.see("Open");
	//I.see("Closed");
}

/**
 * Utility function used to generate a test email,
 * for signup / login. If using such email for signup : one should presume
 * that password == email. For simplicity of the test case
 * 
 * @param  type of email to use, this is used to generate different emails (default is unknown)
 * 
 * @return  String representation of the email to use
 */
function getUniqueTestEmail(type) {
	if(type == null || type.length == 0) {
		type = "unknown";
	}
	// return "uit-"+type+"-"+DATA.test_runID+"@maildrop.cc";
	return "uit-"+type+"-"+DATA.test_runID+"@inboxkitten.com";
}

/**
 * Signup for a given test account, given the account type
 *
 * @param   type   type of account to signup for
 * 
 * @return  the final email string generated
 */
function signupUniqueTestAccount(type) {
	// Get the test email
	let testEmail = getUniqueTestEmail(type);

	// Reset any current login session if found
	resetSession();

	// Click on signup
	I.click( "Sign Up" );

	// Fill up the form
	// I.fill("Name", testEmail );
	// I.fill("Phone", "98765432" );
	// I.fill("Country", "Singapore" );
	I.fill("Email", testEmail );
	I.fill("Password", testEmail );

	// Agree to T&C
	I.click("By signing up");
	//I.selected("By signing up");

	// Submit the form
	I.click("SUBMIT");

	// Do not see the signup
	I.dontSee("SUBMIT");

	// Looping through the "My Units" check
	if( !I.see("My Units") ) {
		for( let i=0; i<10; ++i ) {
			if( I.see$("My Units") ) {
				break;
			}
			TEST.log.info("WARNING : Signup is taking much longer then expected");
		}
	}

	// My units header
	I.must.see("My Units");
	//I.see("ALL UNITS");

	return testEmail;
}

/**
 * Signup for a given test account, given the account type
 *
 * @param   type   type of account to signup for
 */
function loginUniqueTestAccount(type) {
	// Get the test email, and apply the login
	let testEmail = getUniqueTestEmail(type);
	loginAccount(testEmail, testEmail);
}

/**
 * Goto inboxkitten account
 */
function gotoMailBox(email) {
	I.goTo( getMailboxUrl(email) );
	I.wait(5);
}

/**
 * Get inboxkitten inbox key
 * @param {*} email 
 * @return inboxkitten, inbox key
 */
function getMailboxKey(email) {
	let emailPrefix = email.split("@")[0];
	return (""+emailPrefix).toLowerCase();
}

/**
 * Inboxkitten URL for list
 */
function getMailboxUrl(email) {
	return "https://inboxkitten.com/inbox/"+getMailboxKey(email)+"/list";
}
