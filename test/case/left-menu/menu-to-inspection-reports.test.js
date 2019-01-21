////////////////////////////////////////////////
//
//  test case : Menu to Units
//
////////////////////////////////////////////////

// Start by login to a valid user
TEST.run("case/auth/valid-login");

// Click the home navigator, and move to Units
I.click("#app", 25, 25);
I.wait(1);
I.see("Inspection Reports");
I.click(".items-center");

I.see("There are no reports that match your current filter combination.");
I.see("[Uilicious Automated Test]");