////////////////////////////////////////////////
//
//  test case : owner signup, and creating of unit
//
////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.requireOnce("func/auth/authUtils");

// Lets get the owner signed up
signupUniqueTestAccount("owner");

// Click add
I.click("add");
