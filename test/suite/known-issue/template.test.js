// Case Managment 
//--------------------------------------
TEST.run("case/case-management/new-case-window (buggy-users).test.js");

// Reset session before duplicate email test
//--------------------------------------
resetSession();

// Invalid Signup
//--------------------------------------
TEST.run("case/auth/invalid-signup (duplicate-email)");
