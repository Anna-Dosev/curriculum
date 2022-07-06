# Shell 301
## Execute custom commands defined in a shell script

### Converting a shell script to be a custom CLI command
-Define the script
-Save the file with a `.sh` extention
-Run the script to make sure it works --> `sh <fileName>.sh`
-Change its permissions to bei n the executable with `chmod 755 <fileName>.sh`
-Remove the `.sh` extension; had to do this in vs code and not in finder, idk why it didnt work in finder 
-Place the executable in a **~./bin** directory (create this if not exist already)
-Add **~./bin** to the PATH
-Restart or reset the CLI
-Run the command from the CLI using the filename as the command itself; whatever filename the executable has, it becomes the command
