////////////////////////////////////////////////
//
//  Notification utility functions
//
////////////////////////////////////////////////

if(!TEST.requireOnce) {
	TEST.run("func/polyfill");
}
TEST.requireOnce("func/auth/authUtils");

/**
 * Signup for a given test account, given the account type
 *
 * @param   type   type of account to signup for
 */
function signupUniqueTestAccount_disableAllNotification(type) {
	let email = signupUniqueTestAccount(type);

	// Lets go case page (instead of guessing the landing page)
	I.goTo(DATA.site+"/case/")

	// Click the home navigator, and click on notification settings
	I.click("#app", 145, 25);
	I.wait(1);
	I.see("Notification Settings");
	I.click(".items-center");

	// Lets see the email update header
	I.must.see("Receive email updates");

	//
	// Lets deselect everything
	//

	I.see("assigned to a new case");
	I.click("assigned to a new case");

	I.see("assigned to an existing case");
	I.click("assigned to an existing case");

	I.see("invited to a case");
	I.click("invited to a case");

	I.see("new message on a case");
	I.click("new message on a case");

	// This is already deselected by default
	//-----------------------------------------
	// I.see("case is updated");
	// I.click("input");

	// Lets save the screenshot
	TEST.log.info("Disabled all notification for : "+email);
}