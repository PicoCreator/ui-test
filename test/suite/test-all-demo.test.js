////////////////////////////////////////////////
//
//  Performs all applicable test cases,
//  against 'demo.case.unee-t.com' 
//
////////////////////////////////////////////////

// Configure the data variable
//--------------------------------
DATA.site  = "https://demo.case.unee-t.com";

// Load default values
TEST.run("data-config");

// Run the test-all-template
//--------------------------------
TEST.run("suite/test-all-template");