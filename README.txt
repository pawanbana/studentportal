Clone directory using git clone url;


install nodejs first.
install xampp server and run the php and mysql server
 on xampp
 

after that goto xampp or lampp=>htdocs and copy paste the aboutplacement,attendence,exam,notesharing folder as it is.

open the localhost/phpmyadmin in browser

do following step
create db attendance and import file attendance.sql from attendance folder.
create db notes and import file from notesharing/db/  named as notes.sql.
create db project and import file from exam/ named as project.sql.
create db noticeboard and run query as given in readme file.



now open the mainlanding folder and do the 
npm install 

now open terminal and run 

node app.js


do make sure that xampp is running all the time so that database and project is working fine.



for exam portal when you want to create a quiz you have to login through admin login and 
credentials are 
username: admin@admin.com
password: admin


for notesharing you can have admin login
username: root
password: adminroot.

admin needs to approve for notes and also he can delete and can do various things.

for chat app just create your credentials and signup and go chat.

