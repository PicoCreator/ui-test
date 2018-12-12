////////////////////////////////////////////////
//
//  test case : tenant invitation signup
//
////////////////////////////////////////////////

// Include the data-config, and created case
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/5-owner-logout");

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

// Im still on the inbox kitten page after clicking - try again
if( I.amAt$( getMailboxUrl( getUniqueTestEmail("tenant") ) ) ) {
	TEST.log.info("WARNING : Inboxkitten click failed - trying again");

	// Going to the inbox
	gotoMailBox( getUniqueTestEmail("tenant") );

	// Waiting and clicking
	I.wait(5);
	I.must.see("New Case");
	I.click("New Case");
}

// Click on the link
I.see("If the above link does not work, copy paste this in your browser:");
I.see("Please click on this link to get more information");
I.click("this link");

//
// See the welcome message
//
I.must.amAt(DATA.site);
I.see("Welcome");
I.see("Let's enter your name to begin");

// Lets fill in tenant details
I.fill("First Name", "The");
I.fill("Last name", "Tenant");

// And submit
I.click("Join Case");
I.dontSee("Let's enter your name to begin");

