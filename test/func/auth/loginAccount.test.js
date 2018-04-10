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
	// Clear all localstorage and cookies
	//
	// cookies alone is not enough as the site uses
	// localstorage to store auth details
	TEST.webdriver().execute("localStorage.clear();");
	UI.COOKIE.deleteAll();
  
	// Go to the login page
	I.goTo( DATA.site );

	// Then do more stuff, like login
	I.fill("Email",    email || DATA.email );
	I.fill("Password", pass  || DATA.pass  );
	I.click("Login");

	// Validate welcome message
	// I.see("Welcome"); // This does not display in mobile view
	I.see("Create New Case");
}
