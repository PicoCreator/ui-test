////////////////////////////////////////////////
//
//  test case : valid login
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
I.fill("Email",    DATA.email );
I.fill("Password", DATA.pass  );
I.click("Login");

// Welcome message
I.see("Create New Case");
