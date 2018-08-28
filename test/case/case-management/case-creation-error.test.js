////////////////////////////////////////////////
//
//  test case : Error message during creation of cases
//
////////////////////////////////////////////////

// Include the data-config, and login to a valid user
TEST.run("data-config");
TEST.requireOnce("case/auth/valid-login");

// Grab a case issue and create a case from it
I.see("Demo - Unit 13-06");
I.click("Add Case");

// Add in empty fields into the required field
I.fill("Case Title","    ");
I.fill("Details","    ");

// Select an assignee
I.click("Owner");

// Create the case
I.click("Add Case");


I.see("API Error: You must enter a summary for this case.");
