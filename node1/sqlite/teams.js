var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  // db.run("create table persons(name char,  age int, gender char, city char, teamId char)")
  // db.run("insert into persons values('Jack',  24, 'male', 'Lodz', 'team5')")
  // db.run("insert into persons values('Anna',		30,	'female',	'Warsaw', 'team6')") 
  // db.run("insert into persons values('Joan',		26,	'female',	'Warsaw', 'team4')")
  // db.run("insert into persons values('Simon',		40,	'male',	'Lodz', 'team2')")
  // db.run("insert into persons values('Michal',		28,	'male',	'Lodz', 'team1')")
  // db.run("insert into persons values('Marta',		24,	'female',	'Poznan', 'team3')")
  // db.run("insert into persons values('Peter',		29,	'male',	'Warsaw', 'team5')")
  // db.run("insert into persons values('Luke',		32,	'male',	'Lodz', 'team6')")
  // db.run("insert into persons values('Kate',		24,	'female',	'Pabianice', 'team4')")
  // db.run("insert into persons values('Chris',		36,	'male',	'Lodz', 'team2')")
  // db.run("insert into persons values('Jack',		25,	'male',	'Poznan', 'team1')")
  // db.run("insert into persons values('Jan',		42,	'male',	'Skierniewice', 'team3')")
  // db.run("insert into persons values('Kate',		38,	'female',	'Warsaw', 'team5')")
  // db.run("insert into persons values('Martyna',		27,	'female', 'Lodz', 'team6')")
  // db.run("insert into persons values('Krzysztof',		26,	'male',	'Zgierz', 'team4')")
  // db.run("insert into persons values('Alex',		25,	'male',	'Tuszyn', 'team2')")
  // db.run("insert into persons values('Amelia',		35,	'female',	'Warsaw', 'team1')")
  // db.run("insert into persons values('Michal',		42,	'male',	'Lodz', 'team3')")
  // db.run("insert into persons values('Peter',		44,	'male',	'Krakow', 'team5')")
  // db.run("insert into persons values('Marcin',		45,	'male',	'Lodz', 'team6')")
  // db.run("insert into persons values('Roman',		23,	'male',	'Lodz', 'team4')"), 
  // db.run("insert into persons values('Patrycja',		25,	'female','Pabianice', 'team2')")
  // db.run("insert into persons values('Dawid',		29,	'male',	'Warsaw', 'team1')")
  // db.run("insert into persons values('Andrew',		30,	'male',	'Lodz', 'team3')")

 db.run("create table persons(name char,  age int, gender char, city char)")
  db.run("insert into persons values('Jack',  24, 'male', 'Lodz')")
  db.run("insert into persons values('Anna',		30,	'female',	'Warsaw')") 
  db.run("insert into persons values('Joan',		26,	'female',	'Warsaw')")
  db.run("insert into persons values('Simon',		40,	'male',	'Lodz')")
  db.run("insert into persons values('Michal',		28,	'male',	'Lodz')")
  db.run("insert into persons values('Marta',		24,	'female',	'Poznan')")
  db.run("insert into persons values('Peter',		29,	'male',	'Warsaw')")
  db.run("insert into persons values('Luke',		32,	'male',	'Lodz')")
  db.run("insert into persons values('Kate',		24,	'female',	'Pabianice')")
  db.run("insert into persons values('Chris',		36,	'male',	'Lodz')")
  db.run("insert into persons values('Jack',		25,	'male',	'Poznan')")
  db.run("insert into persons values('Jan',		42,	'male',	'Skierniewice')")
  db.run("insert into persons values('Kate',		38,	'female',	'Warsaw')")
  db.run("insert into persons values('Martyna',		27,	'female', 'Lodz')")
  db.run("insert into persons values('Krzysztof',		26,	'male',	'Zgierz')")
  db.run("insert into persons values('Alex',		25,	'male',	'Tuszyn')")
  db.run("insert into persons values('Amelia',		35,	'female',	'Warsaw')")
  db.run("insert into persons values('Michal',		42,	'male',	'Lodz')")
  db.run("insert into persons values('Peter',		44,	'male',	'Krakow')")
  db.run("insert into persons values('Marcin',		45,	'male',	'Lodz')")
  db.run("insert into persons values('Roman',		23,	'male',	'Lodz')"), 
  db.run("insert into persons values('Patrycja',		25,	'female','Pabianice')")
  db.run("insert into persons values('Dawid',		29,	'male',	'Warsaw')")
  db.run("insert into persons values('Andrew',		30,	'male',	'Lodz')")

  
  db.run("create table members( teamId char)")
  db.run("insert into members values(	'Not assigned')")
  db.run("insert into members values(	'Not assigned')")
  db.run("insert into members values(	'team4')")
  db.run("insert into members values(	'team2')")
  db.run("insert into members values(	'team1')")
  db.run("insert into members values(	'team3')")
  db.run("insert into members values(	'team5')")
  db.run("insert into members values(	'team6')")
  db.run("insert into members values(	'team4')")
   db.run("insert into members values(	'team2')")
   db.run("insert into members values(	'team1')")
   db.run("insert into members values( 'team3')")
   db.run("insert into members values( 'team5')")
   db.run("insert into members values( 'team6')")
   db.run("insert into members values( 'team4')")
   db.run("insert into members values( 'team2')")
   db.run("insert into members values( 'team1')")
   db.run("insert into members values( 'team3')")
   db.run("insert into members values( 'team5')")
   db.run("insert into members values( 'team6')")
   db.run("insert into members values( 'team4')")
   db.run("insert into members values( 'team2')")
  db.run("insert into members values( 'team1')")
  db.run("insert into members values( 'team3')")

  db.run("create table teams(teamname char, teamId char)")
  db.run("insert into teams values('Infrastructure', 'team6')")
  db.run("insert into teams values('Finance',	'team5')")
  db.run("insert into teams values('Marketing',	'team4')")
  db.run("insert into teams values('Testers', 'team3')")
  db.run("insert into teams values('PR',	'team2')")
  db.run("insert into teams values('Developers',	'team1')")
  db.run("insert into teams values('No assignment',	'Not assigned')")
  
  db.each(`select ROWID from persons where name='Jack'`, 
           function(err, row) {
            console.log(row.ROWID);
  });
 
  db.each(`select avg(age) as avgage from persons left join members on persons.ROWID = members.ROWID group by teamId`, 
           function(err, row) {
            console.log(row.avgage);
  });

//   db.each(`select avg(age) as avgage from persons group by teamId`, 
//   function(err, row) {
//    console.log(row.avgage);
// });

  db.each(`select max(avg_age) as maxAvg from (select avg(age) as avg_age from persons 
            left join members on persons.ROWID = members.ROWID group by teamId)`, 
           function(err, row) {
            console.log(row.maxAvg);
  });

  //  db.each(`select max(avg_age) as maxAvg from (select avg(age) as avg_age from persons group by teamId)`, 
  //          function(err, row) {
  //           console.log(row.maxAvg);
  // });

   db.each(`select teamId from 
            (select teamId, max(avg_age) from (select teamId, avg(age) as avg_age from persons 
            left join members on persons.ROWID = members.ROWID group by teamId))`, 
           function(err, row) {
            console.log(row.teamId);
  });

  //   db.each(`select teamId from 
  //           (select teamId, max(avg_age) from (select teamId, avg(age) as avg_age from persons 
  //            group by teamId))`, 
  //          function(err, row) {
  //           console.log(row.teamId);
  // });

  db.each(`select teamname from teams where teamId =
            (select teamId from (select teamId, max(avg_age) from (select teamId, avg(age) as avg_age from persons 
            inner join members on persons.ROWID = members.ROWID group by teamId)))`, 
           function(err, row) {
            console.log(row.teamname);
  });

  // db.each(`select teamname from teams where teamId =
  //           (select teamId from (select teamId, max(avg_age) from (select teamId, avg(age) as avg_age from persons 
  //            group by teamId)))`, 
  //          function(err, row) {
  //           console.log(row.teamname);
  // });
  
});
 
db.close();