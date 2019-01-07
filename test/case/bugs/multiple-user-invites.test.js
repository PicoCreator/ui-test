////////////////////////////////////////////////
//
//  test case : multiple user invites
//
////////////////////////////////////////////////


// Run the test flow until creating a case
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/3-create-case");

//
// Now lets invite users
//
I.click("Invite User");
I.click("invite a new user");

I.click("Type the email address");
I.fill("Type the email address", getUniqueTestEmail("tenant"));

I.click("Relationship to this unit");
I.click("tenant");

I.click("The Tenant is also the occupant");
I.click("Send invitation");

I.see("We just sent an invite");

I.click("Invite more users");

// Validate that the textfield has been reset 
I.dontSee("@inboxkitten.com");
I.see("Type the email address");
