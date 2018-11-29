#!/bin/bash

# Ensure its from the directory with 'download.sh'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR;

# Does the shell script environment setup
source ./test-shell-setup.sh

# Does wildcard matching against the test file for the "test" folder
# which is used when "auto-filling" the bash script
TEST_FILE="$1"

# Remove test prefix if detected
if [[ "${TEST_FILE:0:5}" == "test/" ]] ;
then
	TEST_FILE=${TEST_FILE:5}
fi

# Remove the ".test.js" suffix if detected
if [[ "${TEST_FILE: -8}" == ".test.js" ]] ;
then
	TEST_FILE=${TEST_FILE%.test.js}
fi

# Export the project to the current directory
./uilicious-cli run -u "$UILICIOUS_EMAIL" -p "$UILICIOUS_PASS" "$UILICIOUS_PROJ" "$TEST_FILE" $UILICIOUS_CLIFLAGS