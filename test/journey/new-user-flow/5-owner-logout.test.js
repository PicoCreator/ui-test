////////////////////////////////////////////////
//
//  test case : invite tenant
//
////////////////////////////////////////////////

// Include the data-config, and created case
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/4-invite-tenant");

// Click the home navigator, and perform a logout
I.click("#app", 145, 25);
I.wait(1);
I.see("Logout");
I.click(".items-center");

// See login screen
I.see("Please login to continue");
