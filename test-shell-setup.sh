#
# Import config file where relevent
#
if [ -f ./uilicious-config.sh ]; then
	echo "Detected 'uilicious-config.sh' - using its environment variables when applicable"
	source ./uilicious-config.sh;
fi