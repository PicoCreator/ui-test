/////////////////////////////////////////////////////////////
//
//  test case : Followup on a case created by jocelyn
//              previously, close it and check that 
//              it is closed
//
//	run this case after a new-case test due to it reading from DATA.newCase_petTitle
//	
/////////////////////////////////////////////////////////////

// Include the default config, such as site settings
TEST.run("suite/config/demo");
TEST.run("data-config");

// Import any required functions
TEST.run("func/auth/loginAccount");

// Login as jocelyn
loginAccount("jocelyn@inboxkitten.com");

// Select the unit
I.see("Demo - Unit 01-02");
I.click ("Demo - Unit 01-02");

// Click on the "issue"
I.click(DATA.newCase_petTitle);

// Click on "more info"
I.click("More info");
I.see("Status");

// Change the status to RESOLVED
I.click("CONFIRMED");
I.click("RESOLVED")

// I.refreshPage();
// I.goTo("https://case.demo.unee-t.com/");
I.click('//*[@id="app"]/div/div/div[1]/div[1]/div[1]/div/button');
I.see("Support");
I.click("Cases");

// Click on the "closed" issues
I.see("Assigned To Me");
I.click("closed");

// Select the unit and verify that the case is there
// I.click ("Demo - Unit 01-02");
// I.see("Are pet Emu's allowed?");
I.see(DATA.newCase_petTitle);