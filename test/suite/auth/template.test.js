////////////////////////////////////////////////
//
//  This is a common template for the
//  test all suite, which will be used
//  by demo / dev / production???
//
////////////////////////////////////////////////

// Invalid Signup
//--------------------------------------
TEST.run("case/auth/invalid-signup (duplicate-email)");
// TEST.run("case/auth/invalid-signup (invalid-email)");

// Authentication 
//--------------------------------------
TEST.run("case/auth/invalid-login");
TEST.run("case/auth/valid-login");
TEST.run("case/auth/valid-login-and-out");
TEST.run("case/auth/valid-signup");
