////////////////////////////////////////////////
//
//  test case : valid-signup
//
////////////////////////////////////////////////

// Include the data-config
TEST.run("data-config");

// Go to the signup page
I.goTo( DATA.site );

// Click on signup
I.click( "Sign Up" );

// Fill up the form
I.fill("Name", DATA.signup_email );
I.fill("Phone", "98765432" );
I.fill("Country", "Singapore" );
I.fill("Email", DATA.signup_email );
I.fill("Password", DATA.signup_pass );

// Submit the form
I.click("SUBMIT");

// See dashboard
I.see("Create New Case");
