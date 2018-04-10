////////////////////////////////////////////////
//
//  This is a common template for the
//  test all suite, which will be used
//  by demo / dev / production???
//
////////////////////////////////////////////////

// Authentication 
//--------------------------------------
TEST.run("case/auth/invalid-login");
TEST.run("case/auth/valid-login");

// Case management
//--------------------------------------
TEST.run("case/case-management/create-a-new-case-window (multiple-users-repeated)");