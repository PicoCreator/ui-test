////////////////////////////////////////////////
//
//  Performs all applicable test cases,
//  against 'demo.case.unee-t.com' 
//
////////////////////////////////////////////////

// Configure the data variable
//--------------------------------
TEST.run("suite/config/demo");

// Test dependency / function
//--------------------------------
TEST.run("func/auth/resetSession");

// Run the auth list
//--------------------------------
TEST.run("suite/auth/template");

// Run the valid signup test
//--------------------------------
resetSession();
TEST.run("case/auth/valid-signup");
