/////////////////////////////////////////////////////////////
//
//  test case : create-a-new-case using jocelyn account
//              extended with more details
//
/////////////////////////////////////////////////////////////

// Runs the full "new-case (jocelyn)" first
TEST.run("case/case-management/new-case (jocelyn)");

// Time to add more details
I.fill("Type your response", "Dun worry, I will keep it clean and safe");
I.pressEnter();

// Upload an image file
I.upload("Type your response", "upload/cage.jpg");

// Lets wait abit to make sure upload progress bar is completed
// Done in multiples so that proper screenshots can be seen
I.wait(2);
I.wait(2);
I.wait(2);

// Time to add more details
I.fill("Type your response", "In a cage like this");
I.pressEnter();

// Lets assert all the text
I.see( DATA.newCase_petDetails );
I.see( "Dun worry, I will keep it clean and safe" );
I.see( "In a cage like this" );

// Validate screenshot
// I.seeImage(...)

// Lets reload the page
I.refreshPage();

// Lets assert all the text
I.see( DATA.newCase_petDetails );
I.see( "Dun worry, I will keep it clean and safe" );
I.see( "In a cage like this" );

// Validate screenshot
// I.seeImage(...)
