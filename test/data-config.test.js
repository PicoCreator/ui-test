////////////////////////////////////////////////
//
//  Default data configuration file
//
//  Used to hold the default settings on 
//  all the default data config
//
//  Important! : do not remove / reanem 
//  this file as all test cases / macro 
//  depends on it
//
////////////////////////////////////////////////

//
// Site configuration
//
DATA.site  = DATA.site  || "https://dev.case.unee-t.com";

//
// Known valid email with login (auth based checks)
//
DATA.email = DATA.email || "leonel@mailinator.com";
DATA.pass  = DATA.pass  || "leonel";

//
// Unique test run ID : used to generate various email accounts
// @TODO : Get from uilicious the actual test ID, instead of the run date
//
DATA.test_runID = DATA.test_runID || Date.now();
