////////////////////////////////////////////////
//
//  test case : check that the image is uploaded correctly
//
////////////////////////////////////////////////

// Include the data-config, and created case
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/3-create-case");

//
// Lets do some welcome messages
//

// Fill in the chat box
I.click('//*[@id="chatbox"]');
I.type("This is to check that the image is uploaded correctly");
I.click("send");

// Upload an image file
I.upload("Type your response", "upload/cat.jpg");

// Lets wait abit to make sure upload progress bar is completed
// Done in multiples so that proper screenshots can be seen
I.wait(2);
I.wait(2);
I.wait(2);

// Make sure the image is loaded properly
// This is not reliable, as user ID can randomly include a 0
//I.dontSee("0");