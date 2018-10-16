////////////////////////////////////////////////////////////////////////////////////
//
//  test case : Error message during creation of cases with missing blank fields
//
////////////////////////////////////////////////////////////////////////////////////

// Include the data-config, and login to a valid user
TEST.run("data-config");
TEST.run("case/auth/valid-login");

I.see("Demo Unit - 13-06");
I.dontSee("Demo Unit - 13-06-123-84");
I.dontSee("Demo Unit - 13-06-556");