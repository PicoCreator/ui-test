/////////////////////////////////////////////////////////////
//
//  test case : create-a-new-case using jocelyn account
//
/////////////////////////////////////////////////////////////

// Include the default config, such as site settings
TEST.run("suite/config/demo");
TEST.run("data-config");

// Import any required functions
TEST.run("func/auth/loginAccount");

// Login as jocelyn
loginAccount("jocelyn@mailinator.com");

// Select the unit
I.see("Demo - Unit 01-02");
I.click ("Demo - Unit 01-02");

// Click on the "issue"
I.click(DATA.newCase_petTitle);
//I.click("Are pet Kowari's allowed?");

// Validate the messages
I.see( DATA.newCase_petDetails );

// Time to add a detailed response
I.fill('//*[@id="chatbox"]', "Awaiting your response");
I.click('//*[@id="app"]/div/div/div[1]/div[2]/div[2]/div/div/div/div[3]/div[2]/div');

I.see("Awaiting your response");
