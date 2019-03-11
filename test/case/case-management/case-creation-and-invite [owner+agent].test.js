//////////////////////////////////////////////////////////////////////
//
//  test case : owner create case and assign and invite agent
//
//////////////////////////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.requireOnce("func/auth/authUtils");
TEST.requireOnce("func/case/setupNewCase");

// Signup as new owner
DATA.umSuffix = "-cma";
TEST.run("case/unit-management/signup-and-setup-unit [owner]");

// Add a case
I.click("add");

// Setup new case details
setupNewCase( {
	assign : "agent",
	assignEmail : getUniqueTestEmail("cmi-agent"),
	isOccupant : false
} );
