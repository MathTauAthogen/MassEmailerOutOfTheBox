#Usage Instructions
##Configuration
1. Go into the email/initial folder, and edit html.pug and subject.pug to whatever you want. Alternatively, add your own template folder!
2. cd .. twice to return to the root directory.
3. vim emailer.js
4. There are comments on the lines that need to be configured. Do that, with your email username, password, and your real name. Also, set the name of the template you're using. Some other options are also provided.
5. :x
6. vim emaillist.txt
7. Enter, one email per line, the email addresses from the spreadsheet. Simply selecting in the spreadsheet, copying, and pasting will do the job.
8. :x
9. vim namelist.txt
10. Enter, one name per line, the values for the [REP] variable.
11. :x
12. node emailer.js
13. ???
14. Profit
15. You will recieve replies to [youremail]+[folderName]@[domainname].[tld], which allows you to filter this into a folder in your email provider. However, this will not be the main "from:" email displayed to the companies you are contacting.
