////////////////////////////////////////////////
//
//  test case : valid login
//
////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.run("case/auth/valid-login");

// Click the home navigator, and perform a logout
I.click('//html/body', 25, 25);
I.see("Logout");
I.click("Logout");
I.see("Please login to continue");
