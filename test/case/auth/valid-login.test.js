////////////////////////////////////////////////
//
//  test case : valid login
//
////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.run("func/auth/authUtils");

// Perform the login
loginAccount( DATA.email, DATA.pass );
