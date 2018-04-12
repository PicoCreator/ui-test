/**
* Clears all authentication information inside the browser.
*
*/
function resetSession() {
	// Go to the site
	I.goTo( DATA.site );

	// Clear all localstorage and cookies
	//
	// cookies alone is not enough as the site uses
	// localstorage to store auth details
	TEST.webdriver().execute("localStorage.clear();");
	UI.COOKIE.deleteAll();

	// Go to the login page
	I.goTo( DATA.site );
}