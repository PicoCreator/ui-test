////////////////////////////////////////////////
//
//  test case : view case and logout
//
////////////////////////////////////////////////

// Start by login to a valid user
TEST.run("case/auth/valid-login");

// Go into a single case
I.click("Demo Unit - 13-06");
I.click("Demo Case - Main Door Lock Issue");
I.see("Tip:");

//Go back to list of cases
I.click("Back");
I.see("Demo Unit - 13-06");

// Click the home navigator, and perform a logout
I.click("#app", 25, 25);
I.wait(1);
I.see("Logout");
I.click(".items-center");

// Validate login screen
I.wait(1);
I.see("Please login to continue");