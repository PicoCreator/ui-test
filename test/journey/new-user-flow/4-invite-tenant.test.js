////////////////////////////////////////////////
//
//  test case : invite tenant
//
////////////////////////////////////////////////

// Include the data-config, and created case
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/3-create-case");

//
// Lets do some welcome messages
//

// Fill in the chat box
I.click('//*[@id="chatbox"]');
I.type("The unee-t platform allows you to inform and update me, of any problems you may find during your stay.");
I.pressEnter();
I.type("Making any followup easy =)");
I.click("send");

// Finishing line
I.type("Enjoy your stay");
I.click("send");

//
// Now lets invite users
//
I.click("Invite User");
I.click("invite a new user");

I.click("Type the email address");
I.type(getUniqueTestEmail("tenant"));

I.click("Relationship to this unit");
I.click("tenant");

I.select("The tenant is also the occupant of this unit");
I.click("Send invitation");

I.see("We just sent an invite");
I.click("close");
