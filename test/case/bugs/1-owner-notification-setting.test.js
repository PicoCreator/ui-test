//////////////////////////////////////////////////////////////
//
//  test case : set notification settings to off
//
//////////////////////////////////////////////////////////////

// Include the data-config, and created case
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/4-invite-tenant");

// Click the home navigator, and head to the notification settings
I.click("#app", 45, 25);
I.wait(1);
I.click("@inboxkitten");

I.see("Change Profile Picture");
I.click("Notification Settings");

// Turns off notification when a new message is added into a case (on by default)
I.click("new message");
// needs check since the checkbox assertion is not what it seems to be
I.deselected("new message");

// Navigate away from settings
I.click("back");
I.click("back");

// Click the home navigator, and perform a logout
I.click("#app", 45, 25);
I.wait(1);
I.see("Logout");
I.click(".items-center");

//////////////////////////////////////////////////////////////
//
// Verify email for owner
//
//////////////////////////////////////////////////////////////

// Check the email of owner
gotoMailBox( getUniqueTestEmail("owner") );
// Make sure you dont see the notification
I.see("Verify Your Email");
I.click("Verify Your Email");

// Verify the email so that notifications will be shown
I.see("To verify your account email, simply click the link below.");
UI.context("#message-content", ()=> {
	var email = I.getText('/html/body/a');
	I.goTo(email);
});



//////////////////////////////////////////////////////////////
//
// For other user
//
//////////////////////////////////////////////////////////////

//
// Lets hop over to mailinator
//
gotoMailBox( getUniqueTestEmail("tenant") );

// Slower loop to iterate 
for(let i=0; i<10; ++i) {
	if( I.see$("New Case") ) {
		break;
	}
	I.wait(5);
}

// Wait for email, and click it
I.must.see("New Case");
I.click("New Case");

// Click on the link
I.see("If the above link does not work, copy paste this in your browser:");
I.see("Please click on this link to get more information");
I.click("this link");


// Fill in the chat box (this message should not have notified the owner)
I.click('//*[@id="chatbox"]');
I.type("This looks awesome");
I.click("send");

// Click the home navigator, and perform a logout
I.click("#app", 45, 25);
I.wait(1);
I.see("Logout");
I.click(".items-center");

//////////////////////////////////////////////////////////////
///
/// Check the email of owner to make sure the notification is not sent
///
//////////////////////////////////////////////////////////////

// Check the email of owner
gotoMailBox( getUniqueTestEmail("owner") );
// Make sure you dont see the notification
I.dontSee("New Message");

//////////////////////////////////////////////////////////////
///
/// Change the notification settings back to 'on' for owner
///
//////////////////////////////////////////////////////////////
loginUniqueTestAccount("owner");

// Click the home navigator, and head to the notification settings
I.click("#app", 45, 25);
I.wait(1);
I.click("@inboxkitten");

I.see("Change Profile Picture");
I.click("Notification Settings");

// Turns off notification when a new message is added into a case (on by default)
I.click("new message");
// needs check since the checkbox assertion is not what it seems to be
I.selected("new message");

// Navigate away from settings
I.click("back");
I.click("back");

// Click the home navigator, and perform a logout
I.click("#app", 45, 25);
I.wait(1);
I.see("Logout");
I.click(".items-center");


//////////////////////////////////////////////////////////////
///
/// Go back to tenant again to send another message
///
//////////////////////////////////////////////////////////////
gotoMailBox( getUniqueTestEmail("tenant") );

// Slower loop to iterate 
for(let i=0; i<10; ++i) {
	if( I.see$("New Case") ) {
		break;
	}
	I.wait(5);
}

// Wait for email, and click it
I.must.see("New Case");
I.click("New Case");

// Click on the link
I.see("If the above link does not work, copy paste this in your browser:");
I.see("Please click on this link to get more information");
I.click("this link");


// Fill in the chat box (this message should notified the owner)
I.click('//*[@id="chatbox"]');
I.type("This message should notified the owner thru email");
I.click("send");

// Click the home navigator, and perform a logout
I.click("#app", 45, 25);
I.wait(1);
I.see("Logout");
I.click(".items-center");


//////////////////////////////////////////////////////////////
///
/// Check the email of owner to make sure the notification is sent
///
//////////////////////////////////////////////////////////////

// Check the email of owner
gotoMailBox( getUniqueTestEmail("owner") );
// Make sure you dont see the notification
I.see("New Message");
I.click("New Message");

// Make sure the notification i sthe correct one
I.see("This message should notified the owner thru email");

/*

I.must.amAt(DATA.site);
// Click the home navigator, and head to the notification settings
I.click("#app", 145, 25);
I.wait(1);
I.click("@inboxkitten");

I.see("Change Profile Picture");
I.click("Notification Settings");

I.click("new message");
// needs check since the checkbox assertion is not what it seems to be
I.deselected("new message");

*/
