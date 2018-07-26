////////////////////////////////////////////////
//
//  test case : tenant invitation signup
//
////////////////////////////////////////////////

// Include the data-config, and created case
TEST.run("data-config");
TEST.requireOnce("journey/new-user-flow/5-tenant-invite-signup");

//
// Now lets try to do some responses
//

// Fill in the chat box
I.click('//*[@id="chatbox"]');
I.type("This looks awesome");
I.click("send");
I.click('//*[@id="chatbox"]');
I.type("Hmm... i know its a bit late to ask, but can I bring in my pet cat?");
I.click("send");

// Upload an image file
I.upload("Type your response", "upload/cat.jpg");

// Lets wait abit to make sure upload progress bar is completed
// Done in multiples so that proper screenshots can be seen
I.wait(2);
I.wait(2);
I.wait(2);

// And end it off
I.click('//*[@id="chatbox"]');
I.type("Its cute >_<");
I.click("send");