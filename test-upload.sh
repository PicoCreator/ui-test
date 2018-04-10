#!/bin/bash

# Ensure its from the directory with 'download.sh'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR;

# Does the shell script environment setup
source ./test-shell-setup.sh

# Export the project to the current directory
uilicious-cli import "$UILICIOUS_PROJ" "./test" -u "$UILICIOUS_EMAIL" -p "$UILICIOUS_PASS" --overwrite