//////////////////////////////////////////////////////////////////////////
//
//  test case : agent signup, and creating of unit as a agent
//
//////////////////////////////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.requireOnce("func/auth/authUtils");
TEST.requireOnce("func/unit/setupNewUnit");

// Lets get the agent signed up
signupUniqueTestAccount("um-management"+(DATA.umSuffix || ""));

// Make sure that there is no units appended to a new account
I.dontSee("[UI-Test]");

// Click the add unit button
I.click("add");

// Lets do the unit creation test part
setupNewUnit({
	relationship : "Management"
});
