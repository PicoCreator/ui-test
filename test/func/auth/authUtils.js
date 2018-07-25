////////////////////////////////////////////////
//
//  test case : valid-signup
//
//  Properly performing and 
//  testing the signup process
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
 *
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

	// Validate welcome message
	// I.see("Welcome"); // This does not display in mobile view
	I.dontSee("Login");
	I.see("Open");
	I.see("Closed");
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
function getTestEmail(type) {
	if(type == null || type.length == 0) {
		type = "unknown";
	}
	return "AUTO-"+type+"-"+DATA.test_runID+"@mailinator.com";
}

/**
 *
 * Signup for a given test account, given the account type
 *
 * @param   type   type of account to signup for
 *
 */
function signupTestAccount(type) {
	// Get the test email
	let testEmail = getTestEmail(type);

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
	I.select("By signing up");

	// Submit the form
	I.click("SUBMIT");

	// See dashboard
	I.dontSee("SUBMIT");
	I.see("My Units");
	I.see("ALL UNITS");
}

/**
 *
 * Signup for a given test account, given the account type
 *
 * @param   type   type of account to signup for
 */
function loginTestAccount(type) {
	// Get the test email, and apply the login
	let testEmail = getTestEmail(type);
	loginAccount(testEmail, testEmail);
}
