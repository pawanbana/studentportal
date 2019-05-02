var events = require('./events.js');
var mysql = require('mysql');
var _ = require('lodash');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'noticeboard'
});

connection.connect();

// create a db called notice board


// CREATE TABLE `items` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `title` varchar(255) NOT NULL,
//   `description` longtext,
//   `date` varchar(255) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1
exports.events = function (req, res) {
  connection.query('select * from `items`', (err, result) =>{
    if(err){console.log(err);}
   let eventt = JSON.stringify(result);
   let x = JSON.parse(eventt);
   res.json(x);
  });
};

exports.event = function (req, res) {
  var body = req.body;
  var query ='INSERT INTO `items` (`title`, `description`, `date`) VALUES (?, ?, ?)'
  connection.query(query, [body.title, body.detail, body.date], (err, result) =>{
    if(err){console.log(err)}
  });
 res.redirect('/');
};

exports.delevent = function(req, res) {
  let query = `DELETE FROM items WHERE id = ${req.params.eventId}`;
connection.query(query, (err,result)=>{
  if(err){console.log(err);}
  res.redirect('/');
})
};


// CREATE TABLE `placement` (
//   `id` int(11) NOT NULL AUTO_INCREMENT,
//   `title` varchar(255) NOT NULL,
//   `description` longtext,
//   `date` varchar(255) DEFAULT NULL,
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=latin1
exports.placements = function (req, res) {
  connection.query('select * from `placement`', (err, result) =>{
    if(err){console.log(err);}
   let eventt = JSON.stringify(result);
   let x = JSON.parse(eventt);
   res.json(x);
  });
};

exports.placement = function (req, res) {
  var body = req.body;
  var query ='INSERT INTO `placement` (`title`, `description`, `date`) VALUES (?, ?, ?)'
  connection.query(query, [body.title, body.detail, body.date], (err, result) =>{
    if(err){console.log(err)}
  });
 res.redirect('/placement');
};

exports.delplacement = function (req, res) {
  let query = `DELETE FROM placement WHERE id = ${req.params.eventId}`;
connection.query(query, (err,result)=>{
  if(err){console.log(err);}
  res.redirect('/');
});
};