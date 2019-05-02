## Vue Events Bulletin Board

This is the code for the Vue.js [tutorial on Scotch.io](https://scotch.io/tutorials/build-a-single-page-time-tracking-app-with-vue-js-introduction). In the tutorial we build a events bulletin board application and cover the basics of [Vue](http://vuejs.org/).

## Installation

1. Run `npm install`.
2. Run `node server.js`.

3. Visit [http://localhost:8080](http://localhost:8080).
3. Visit [http://localhost:8080/placement](http://localhost:8080/placement).

make a db called noticeboard
insert these two tables
 CREATE TABLE `items` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `title` varchar(255) NOT NULL,
  `description` longtext,
   `date` varchar(255) DEFAULT NULL,
   PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1

CREATE TABLE `placement` (
   `id` int(11) NOT NULL AUTO_INCREMENT,
   `title` varchar(255) NOT NULL,
   `description` longtext,
   `date` varchar(255) DEFAULT NULL,
   PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1


## RESTful API (contributed by Jason Lam)

1. **Use Node.js & Express for backend server and router.**
2. **RESTful requests towards the server to simulate CRUD on *events* model, instead of local hardcoded ones.**
3. Translated into Traditional Chinese.

## RESTful API written in Go 

If you would like to use a backend written in Go, [thewhitetulip](http://github.com/thewhitetulip) has written on. See [the source code](https://github.com/thewhitetulip/go-vue-events).
 
