////////////////////////////////////////////////////////////////////////////////////
//
//  test case : Test for an expected unit name,
//
////////////////////////////////////////////////////////////////////////////////////

// Include the data-config, and login to a valid user
TEST.run("data-config");
TEST.run("case/auth/valid-login");

// Lets jump over to the unit page - and assert for a known case
I.goTo("/unit");
I.see("Demo Unit - 13-06");

// Lets go to the case page - and use the menu
I.goTo("/case");

// And navigate to the unit page via the menu
I.click("#app", 145, 25);
I.see("FAQ");
I.see("Units");
I.click(".items-center");

// Validate redirect
I.amAt("/unit");

// And the unit
I.see("Demo Unit - 13-06");
