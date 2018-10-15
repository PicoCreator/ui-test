/////////////////////////////////////////////////////////////////
//
//  test case : reply using only spaces and ensure there 
//              is no "Failed to post" error
//
//  NOTE : This requires the "valid-login" account, 
//         to have a valid unit, and case named
//         "Demo Unit - 13-06", "Demo Case - Main Door Lock Issue"
//
/////////////////////////////////////////////////////////////////

// Include the data-config, and login to a valid user
TEST.run("data-config");
TEST.requireOnce("case/auth/valid-login");

// Grab a case issue
I.click("Demo Unit - 13-06");
I.see("Demo Case - Main Door Lock Issue");
I.click("Demo Case - Main Door Lock Issue");

// Fill in the chat box with blanks
I.fill("#chatbox", "     ");
I.click("send");

// Give API time to respond
I.wait(2);
I.dontSee('Failed to post');
