////////////////////////////////////////////////
//
//  test case : invalid login
//
////////////////////////////////////////////////

// Include the data-config
TEST.run("data-config");

//
// The actual test case
//

// Start by going to a web page first, like this:
I.goTo( DATA.site );

// Then do more stuff, like login:
I.fill("Email",    "test-user-"+Date.now()+"@mailinator.com" );
I.fill("Password", Date.now()  );
I.click("Login");

// Welcome message
I.see("Email or password do not match");
