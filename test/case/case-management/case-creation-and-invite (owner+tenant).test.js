//////////////////////////////////////////////////////////////////////
//
//  test case : owner create case and assign and invite tenant
//
//////////////////////////////////////////////////////////////////////

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
	assign : "tenant",
	assignEmail : getUniqueTestEmail("cmi-tenant"),
	isOccupant : true
} );
