#!/bin/bash

# Ensure its from the directory with 'download.sh'
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd $DIR;

# Does the shell script environment setup
source ./test-shell-setup.sh

# Upload using uilicious internal admin build
if [ ! -z "$UILICIOUS_CLIPATH" ]; then
	# Upload using the admin cli build
	echo "uploading using admin settings"
	node "$UILICIOUS_CLIPATH" import "$UILICIOUS_PROJ" "./test" -u "$UILICIOUS_EMAIL" -p "$UILICIOUS_PASS" --overwrite $UILICIOUS_CLIFLAGS
else
	# Upload the project to the current directory
	uilicious-cli import "$UILICIOUS_PROJ" "./test" -u "$UILICIOUS_EMAIL" -p "$UILICIOUS_PASS" --overwrite
fi
