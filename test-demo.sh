#!/bin/bash

# Ensure its from the directory with 'download.sh'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR;

#
# Import config file where relevent
#
if [ -f ./uilicious-config.sh ]; then
	echo "Detected 'uilicious-config.sh' - using its environment variables when applicable"
	source ./uilicious-config.sh;
fi

# Export the project to the current directory
uilicious-cli run -u "$UILICIOUS_EMAIL" -p "$UILICIOUS_PASS" "$UILICIOUS_PROJ" "suite/demo-test-all"