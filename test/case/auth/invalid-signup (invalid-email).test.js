//////////////////////////////////////////////////////////
//
//  test case : invalid-signup (invalid-email)
//
//  Ensure email form is validated in signup
//
//////////////////////////////////////////////////////////

// Include the data-config
TEST.run("data-config");

// Go to the signup page
I.goTo( DATA.site );

// Click on signup
I.click( "Sign Up" );

// Fill up the form
I.fill("Email", "not-a-valid-email-format" );
I.fill("Password", "not-a-valid-email-format" );

// See error message
I.see("Email address is invalid");

// Agree to T&C
I.click("By signing up");

// Click on submit (expect nothing to happen)
I.click("SUBMIT");
I.see("Email address is invalid");