# GIT 201
##  `.gitignore` keeps sensitive and unnecessary files out of version control

### follow these steps to create a .DS_Store file
```
###CLI ###
1. `mkdir parent`
2. `cd parent`
3. `touch blah.txt`
4. `mkdir child`
5. `ls -al` --> .DS_Store is not present

### Finder ###
6. drag blah.txt from parent/ to parent/child/
7. drag blah.txt from parent/child/ to parent/

### CLI ###
8. `ls -al` --> .DS_Store file is present
```

### Steps to igmore a file
- create a **.gitignore** filie in tthe root directory, which is the same where **.git** lives
- add the file name you wish to ignore to **.gitignore**
- save the file 