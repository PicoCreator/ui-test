//
//  Inside the "new unit" form, fill up all the fields accordingly
//
//  Under the options, the following parameters are supported if given.
//  default values would be used in place if not provided
//
// + name
// + type
// + relationship
// + isOccupant (boolean)
// + description
// + address
// + city
// + country
// + region
// + zip
//
// @param  opt  [optional] object containing option parameters
//
function setupNewUnit(opt) {

	// Null option obj safety
	opt = opt || {};
	
	// Lets fill up some unit information
	I.fill("Unit Name", opt.name || "[UI-TEST] unit - "+DATA.test_runID);
	// Unit type selection
	I.click("Unit Type");
	I.click( opt.type || "House");
	// Relationship selection
	I.click("Relationship to unit");
	I.click( opt.relationship || "Owner");
	// Select occupant
	if( opt.isOccupant ) {
		I.select("I am also the occupant");
	}
	
	// Notes / Additional descrip
	I.fill("Additional Description", opt.description || "[Uilicious Automated Test]");

	// Filling in the address
	I.fill("Address", opt.address || "This Should Be Considered A Real Address");
	I.fill("City", opt.city || "CBD");

	// This forces the address segment into view
	I.click("ZIP / Postal Code");

	// Country selection
	I.fill("Country", opt.country || "Singapore");
	//I.type("Singapore");
	//I.click("Singapore");

	// Adminstrative region
	I.fill("Administrative Region", opt.region || "Singapore");
	I.fill("ZIP", opt.zip || "654321");

	// Add the unit
	I.click("Add Unit");

	//
	// List of cases
	//
	I.must.see("CASES (0)");
}