/**
 * RESERVED FOR FUTURE USE
 * 
 * TEST.requireOnce command, used to import a test script only once
 */
if(TEST.requireOnce == null) {
	const imported = {};
	TEST._oldRun = TEST.run;

	/**
	 * Overwrite TEST.run to log into imported array
	 */
	TEST.run = function(file) {
		 // Indicate that file has been imported
		 imported[file] = true;
		 // Does the original import
		 TEST._oldRun(file);
	}

	/**
	 * Add in requireOnce, that checks against imported tests first
	 */
	TEST.requireOnce = function(file) {
		 if( imported[file] != true ) {
			  TEST.run(file);
		 }
	}
}

/**
* RESERVED FOR FUTURE USE
* 
* TEST.split command, intended to work identically (somehow) to TEST.run,
* but in a seperate test run.
* 
* For now it polyfills to basic TEST.run
*/
TEST.split = TEST.split || TEST.run;