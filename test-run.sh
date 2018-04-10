#!/bin/bash

# Ensure its from the directory with 'download.sh'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR;

# Does the shell script environment setup
source ./test-shell-setup.sh

# Export the project to the current directory
uilicious-cli run -u "$UILICIOUS_EMAIL" -p "$UILICIOUS_PASS" "$UILICIOUS_PROJ" "$1"