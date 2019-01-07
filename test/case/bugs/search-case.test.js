////////////////////////////////////////////////
//
//  test case : search by case number
//
////////////////////////////////////////////////


// Include the data-config, and login to a valid user
TEST.run("data-config");
TEST.run("case/auth/valid-login");

// Ensure that there is a case there to perform the search check,
// in this case is the case [Demo Open Case]
I.click("Demo Unit - 13-06-260");
I.see("Demo Open Case");

I.click("search");
// Search for the case using the case number
I.fill("searchText","#187");

// It should not show the below text in the result
I.dontSee("There are no cases that match your current filter combination.");