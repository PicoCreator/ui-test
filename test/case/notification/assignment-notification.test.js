//////////////////////////////////////////////////////////////////////////
//
//  test case : agent signup, and creating of unit as a agent
//
//////////////////////////////////////////////////////////////////////////

// Include the data-config, and login util function
TEST.run("data-config");
TEST.requireOnce("func/notification/notificationUtils");

// Lets setup the assignment users
signupUniqueTestAccount_disableAllNotification("ns-assign-new-1-"+(DATA.nsSuffix || ""));
//signupUniqueTestAccount_disableAllNotification("ns-assign-new-2-"+(DATA.nsSuffix || ""));
