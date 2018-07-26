////////////////////////////////////////////////
//
//  test case : valid login
//
////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.run("case/auth/valid-login");

// Click the home navigator, and perform a logout
I.click('//*[@id="app"]/div/div/div[1]/div[1]/div[1]/div/button');
I.click("Logout");
I.see("Please login to continue");
