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
//
// @param  opt  [optional] object containing option parameters
//
function setupNewCase(opt) {

	// Fill in some other details
	I.fill( "Case title", opt.title || "New tenant onboarding to Unee-t" );
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
	I.select(opt.assign || "Owner/Landlord");

	if( opt.assignEmail ) {
		I.fill("email", opt.assignEmail);
	}
}