/////////////////////////////////////////////////////////////
//
//  test case : open "new case" window multiple
//  times across on the current account. 
//
//  This is doneDue to its random occurance nature
//
/////////////////////////////////////////////////////////////

// Include the default config, such as site settings
TEST.run("data-config");

// This function performs a logout and login
// to make this test repeatable
TEST.run("func/auth/loginAccount");

// loginAccount requires the site to be loaded first
I.goTo( DATA.site );

// Iterate the "Create New Case" test 10 times
for(var i=0; i<10; ++i) {
	// login account using the configured account
	loginAccount();

	// Click on "Create New Case"
	I.click("Create New Case");
	
	// Lets see the "New Case" UI
	I.see("New Case");
	I.see("Assign this case to");
	I.see("Add Case");
	
	// And try again after loggin in and out
};