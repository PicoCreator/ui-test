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
// Data variable used
//
DATA.site  = DATA.site  || "https://dev.case.unee-t.com";
DATA.email = DATA.email || "leonel@example.com";
DATA.pass  = DATA.pass  || "leonel";

//
// Signup new user
//
DATA.signup_email = DATA.signup_email || "unee-t-signup-"+Date.now()+"@mailinator.com";
DATA.signup_pass  = DATA.signup_pass  || DATA.signup_email;

//
// Demo account user list
// That is avaliable at : demo.case.unee-t.com
//
DATA.demoAccounts = DATA.demoAccounts || {
	"leonel@example.com"   : "leonel",
	"marley@example.com"   : "marley",
	"michael@example.com"  : "michael",
	"sabrina@example.com"  : "sabrina",
	"celeste@example.com"  : "celeste",
	"jocelyn@example.com"  : "jocelyn",
	"marina@example.com"   : "marina",
	"regina@example.com"   : "regina",
	"marvin@example.com"   : "marvin",
	"lawrence@example.com" : "lawrence",
	"anabelle@example.com" : "anabelle"
};