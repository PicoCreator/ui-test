////////////////////////////////////////////////////////////////////////////////////
//
//  test case : Test for an expected unit name, and case name
//
////////////////////////////////////////////////////////////////////////////////////

// Include the data-config, and login to a valid user
TEST.run("data-config");
TEST.run("case/auth/valid-login");

// Lets go to the case page - and use the menu
I.goTo("/case");

// See the expected unit and case
I.click("Demo Unit - 13-06");
I.click("Demo Open Case");

// See invite user
I.see("Invite User");
