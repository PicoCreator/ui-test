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
DATA.email = DATA.email || "leonel@mailinator.com";
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
	"leonel@mailinator.com"   : "leonel",
	"marley@mailinator.com"   : "marley",
	"michael@mailinator.com"  : "michael",
	"sabrina@mailinator.com"  : "sabrina",
	"celeste@mailinator.com"  : "celeste",
	"jocelyn@mailinator.com"  : "jocelyn",
	"marina@mailinator.com"   : "marina",
	"regina@mailinator.com"   : "regina",
	"marvin@mailinator.com"   : "marvin",
	"lawrence@mailinator.com" : "lawrence",
	"anabelle@mailinator.com" : "anabelle"
};