////////////////////////////////////////////////
//
//  test case : valid-signup
//
//  Properly performing and 
//  testing the signup process
//
////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.run("func/auth/authUtils");

// Perform the login
signupUniqueTestAccount( "singup-test" );