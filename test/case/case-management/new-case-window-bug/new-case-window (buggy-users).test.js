/////////////////////////////////////////////////////////////
//
//  test case : open "new case" window multiple
//  times across multiple accounts. 
//
//  This is doneDue to its random occurance nature
//
/////////////////////////////////////////////////////////////

// Include the default config, such as site settings
TEST.run("data-config");

// This function allows the iteration of user objects
// And performs a logout and login for each account
TEST.run("func/auth/forEachAccount");

// The specific 3 demo users to test
var BUG_USER = {
	"sabrina@example.com"  : "sabrina",
	"marina@example.com"   : "marina",
	"lawrence@example.com" : "lawrence",

	"celeste@example.com"  : "celeste",
	"regina@example.com"   : "regina",
	"marvin@example.com"   : "marvin",
	"anabelle@example.com" : "anabelle"
};

// For each email password pair in the demo account list,
// login and execute the inner function
forEachAccount( BUG_USER, function(email, pass) {

	// For each account, lets repeat this 10 times
	for(var i=0; i<3; ++i) {

		// See and click on crate a case
		I.see("Create New Case");
		I.click("Create New Case");
		
		// Lets see the "New Case" UI
		I.see("New Case");
		I.see("Assign this case to");
		I.see("Add Case");
		
		// And try again, after reloading the page
		I.goTo( DATA.site );
	}

});