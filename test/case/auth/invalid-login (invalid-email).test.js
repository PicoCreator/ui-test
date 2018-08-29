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
I.fill("Email",    "this-is-not-a-valid-email" );
I.fill("Password", Date.now()  );
I.click("Login");

// Error message
I.see("Email address is invalid");
