////////////////////////////////////////////////
//
//  test case : test emoji in chat
//
////////////////////////////////////////////////



// Include the data-config, and login to a valid user
// Include the data-config, and login util function
TEST.run("data-config");
TEST.requireOnce("func/auth/authUtils");
TEST.requireOnce("func/case/setupNewCase");

// Signup as new owner
DATA.umSuffix = "-cmt";
TEST.run("case/unit-management/signup-and-setup-unit [owner]");

// Add a case
I.click("add");

// Setup new case details
setupNewCase( { 
	assign : "owner"
} );


I.wait(2);


// Fill in the chat box with blanks
I.fill("#chatbox", '"😃');
I.click("send");

// Give API time to respond
I.wait(2);
I.see('😃');
