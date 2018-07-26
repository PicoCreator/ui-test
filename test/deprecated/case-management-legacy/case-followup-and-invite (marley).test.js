/////////////////////////////////////////////////////////////
//
//  test case : Followup on a case created by jocelyn
//              as marley the landlord who then
//              replies on it, and invite an external
//              user to review the case
//
/////////////////////////////////////////////////////////////

// Include the default config, such as site settings
TEST.run("data-config");

// Import any required functions
TEST.run("func/auth/loginAccount");

// Prepare the required data variables
DATA.newCase_petAnimal   = DATA.newCase_petAnimal  || "Mandrill";
DATA.newCase_petTitle    = DATA.newCase_petTitle   || "Are pet "+DATA.newCase_petAnimal+"'s allowed?";
DATA.newCase_petDetails  = DATA.newCase_petDetails || "A friend of mine is flying overseas, and would want me to take care of his pet "+DATA.newCase_petAnimal+" for 2 months";
// Create a new contractor to add to case
DATA.newCase_petInspector = DATA.newCase_petInspector || "unee-t-inspector-"+Date.now()+"@mailinator.com";

// Login as marley (landlord)
loginAccount("marley@example.com");

// Select the unit
I.click("Demo - Unit 01-02");

// Click on the "issue"
I.click(DATA.newCase_petTitle);

// Validate the messages
I.see( DATA.newCase_petDetails );
I.see( "Dun worry, I will keep it clean and safe" );
I.see( "In a cage like this" );

// Time to add a detailed response
I.fill("Type your response", "Are you serious??");
I.pressEnter();
I.fill("Type your response", "I will need to get an expert on this");
I.pressEnter();

// Validate response
I.see( "Are you serious??" );
I.see( "I will need to get an expert on this" );

// Go to more info
I.click("More info");

// Invite / remove user
I.click("Invite or remove users");

// Add a new user
I.click("Invite new user");