//////////////////////////////////////////////////////////
//
//  test case : invalid-signup (duplicate-email)
//
//  Testing, for expected error messaage on 
//  duplicate email signup.
//
//  https://github.com/unee-t/frontend/issues/206
//
//////////////////////////////////////////////////////////

// Include the data-config
TEST.run("data-config");

// Go to the signup page
I.goTo( DATA.site );

// Click on signup
I.click( "Sign Up" );

// Fill up the form
I.fill("Name", DATA.email );
I.fill("Phone", "98765432" );
I.fill("Country", "Singapore" );
I.fill("Email", DATA.email );
I.fill("Password", DATA.email );

// Agree to T&C
I.select("By signing up");

// Submit the form
I.click("SUBMIT");

// See dashboard
I.see("Email already exists");
