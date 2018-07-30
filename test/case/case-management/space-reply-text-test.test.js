////////////////////////////////////////////////
//
//  test case : reply using only spaces
//
////////////////////////////////////////////////

// Include the data-config, and login to a valid user
TEST.run("data-config");
TEST.requireOnce("case/auth/valid-login");

// Grab a case issue
I.click("Demo - Unit 13-06");
I.see("Main Door Lock Issue");

I.click("Main Door Lock Issue");

// Fill in the chat box
I.click('//*[@id="chatbox"]');
I.type("   ");
I.pressEnter();
I.click("send");

//
I.see ('Failed to post " " ');
