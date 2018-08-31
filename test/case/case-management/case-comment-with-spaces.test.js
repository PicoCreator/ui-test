/////////////////////////////////////////////////////////////////
//
//  test case : reply using only spaces and ensure there 
//              is no "Failed to post" error
//
/////////////////////////////////////////////////////////////////

// Include the data-config, and login to a valid user
TEST.run("data-config");
TEST.requireOnce("case/auth/valid-login");

// Grab a case issue
I.click("Demo - Unit 13-06");
I.see("Main Door Lock Issue");
I.click("Main Door Lock Issue");

// Fill in the chat box with blanks
I.fill("#chatbox", "     ");
I.click("send");

// Give API time to respond
I.wait(2);
I.dontSee('Failed to post');
