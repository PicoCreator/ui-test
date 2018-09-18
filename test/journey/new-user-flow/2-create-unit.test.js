////////////////////////////////////////////////
//
//  test case : owner signup, and creating of unit
//
////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/1-owner-signup");

//
// Click add
//
I.click("add");

//
// Fill up the unit details
//

// Lets fill up some unit information
I.fill("Unit Name", "[UI-TEST] unit - "+DATA.test_runID);
// Unit type selection
I.click("Unit Type");
I.click("House");
// Relationship selection
I.click("Relationship to unit");
I.click("Owner");
// Select occupant
I.click("I am also the occupant");
// Notes / Additional descrip
I.fill("Additional Description", "[Uilicious Automated Test]");

// Filling in the address
I.fill("Address", "This Should Be Considered A Real Address");
I.fill("City", "CBD");

// Country selection
I.click("ZIP / Postal Code");
I.fill("Country", "Singapore");
//I.type("Singapore");
//I.click("Singapore");

// Adminstrative region
I.fill("Administrative Region", "Singapore");
I.fill("ZIP", "654321");

// Add the unit
I.click("Add Unit");

//
// List of cases
//
I.see("CASES (0)");
