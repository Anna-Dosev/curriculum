#!/bin/bash
PARENT_DIR=$1
DOC_TITLE=$2

if (( $# < 2)); then
  echo "- - - - -\nERROR: One or more missing arguments\nExecute this command as \"xxf <parentDirectoryName> <titleForHTMLDoc>\"\n- - - - -"
  1>&2
  exit 1  # if in ~/.bashrc, use return here instead of exit
fi        #in bash, spell if backwards to end the if statement

mkdir $PARENT_DIR
cd $PARENT_DIR

echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
  <meta charset=\"UTF-8\" />
  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
  <title>$DOC_TITLE</title>
  <link href=\"./style.css\" rel=\"stylesheet\" />
</head>
<body>
  <script src=\"./main.js\" type=\"text/javascript\"></script>
</body>
</html>" >>index.html

touch main.js style.css

echo "Done"