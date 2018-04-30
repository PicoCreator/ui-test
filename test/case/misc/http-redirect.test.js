////////////////////////////////////////////////
//
//  test case : the site on http, 
//  validate that it redirects to https
//
////////////////////////////////////////////////

// Include the default config, such as site settings
TEST.run("data-config");

// Goes to the HTTP varient of the site
I.goTo( DATA.site.replace("https", "http") );

// Assert redirect happens
I.amAt( DATA.site );