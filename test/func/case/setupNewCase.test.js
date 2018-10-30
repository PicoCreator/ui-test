//
//  Inside the "new case" form, fill up all the fields accordingly
//
//  Under the options, the following parameters are supported if given.
//  default values would be used in place if not provided
//
// + title
// + details
// + category
// + subCategory
// + assign
// + assignEmail (only filled if provided)
// + isOccupant
//
// @param  opt  [optional] object containing option parameters
//
function setupNewCase(opt) {

	// Fill in some other details
	I.fill( "Case title", opt.title || "New onboarding to Unee-t" );
	I.fill( "Details", opt.details || "Welcome aboard!" );

	// Fill in category details
	I.see("Category");
	I.click('//div[contains(@id,"Category")]');
	I.click( opt.category || "Other");

	// Fill in sub category details
	I.see("Sub-category");
	I.click('//div[contains(@id,"Sub-category")]');
	I.click( opt.subCategory || "Viewing");

	/*
	// Select Priority
	I.see("Priority");
	I.click('//div[contains(@id,"Priority")]');
	I.click("P3");

	// Select severity
	I.see("Severity");
	I.click('//div[contains(@id,"Severity")]');
	I.click("minor");
	*/

	// Select Assignment
	I.see("Assign this case to")
	I.click(opt.assign || "Owner/Landlord");

	// Email assignment
	if( opt.assignEmail ) {
		I.fill("email", opt.assignEmail);
	}

	// Occupant assignment flag
	if( opt.isOccupant ) {
		I.click("is also the occupant of this unit");
	}

	// Submit the case 
	I.click("Add Case");

	// Wait for create case to complete
	//I.dontSee("New Case");
	I.see("Open");
	// I.see("Closed");
}