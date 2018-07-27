////////////////////////////////////////////////
//
//  test case : invite tenant
//
////////////////////////////////////////////////

// Include the data-config, and created case
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/4-invite-tenant");

// Click the home navigator, and perform a logout
I.click('//*[@id="app"]/div/div/div[1]/div[1]/div[1]/div/button');
I.click("Logout");
I.see("Please login to continue");
