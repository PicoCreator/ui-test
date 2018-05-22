////////////////////////////////////////////////
//
//  Does regression testing of old, and
//  rather slow test cases
//
////////////////////////////////////////////////

//
// Test a regression of "new-case-window" not loading
//
TEST.run("case/case-management/new-case-window (buggy-users)");
TEST.run("case/case-management/new-case-window (multiple-times)");
TEST.run("case/case-management/new-case-window (multiple-users-repeated)");
