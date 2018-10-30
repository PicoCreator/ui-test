////////////////////////////////////////////////
//
//  test case : create case
//
////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/2-create-unit");

// Add a case
I.click("add");

// Fill in some other details
I.fill( "Case title", "New onboarding to Unee-t" );
I.fill( "Details",    "Welcome aboard!" );

// Fill in category details
I.see("Category");
I.click('//div[contains(@id,"Category")]');
I.click("Other");

// Fill in sub category details
I.see("Sub-category");
I.click('//div[contains(@id,"Sub-category")]');
I.click("Viewing");

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
I.click("Owner/Landlord");

// Submit the case 
I.click("Add Case");

// Wait for create case to complete
I.see("Open");
// I.see("Closed");
