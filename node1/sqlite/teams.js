var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');
 
db.serialize(function() {
  db.run("create table Persons (Name char, PersonId char, Age int, Gender char, City char)")
  db.run("insert into Persons values('Jack', 'person1', 24, 'male', 'Lodz')")
  db.run("insert into Persons values('Anna',	'person2',	30,	'female',	'Warsaw')") 
  db.run("insert into Persons values('Joan',	'person3',	26,	'female',	'Warsaw')")
  db.run("insert into Persons values('Simon',	'person4',	40,	'male',	'Lodz')")
  db.run("insert into Persons values('Michal',	'person5',	28,	'male',	'Lodz')")
  db.run("insert into Persons values('Marta',	'person6',	24,	'female',	'Poznan')")
  db.run("insert into Persons values('Peter',	'person7',	29,	'male',	'Warsaw')")
  db.run("insert into Persons values('Luke',	'person8',	32,	'male',	'Lodz')")
  db.run("insert into Persons values('Kate',	'person9',	24,	'female',	'Pabianice')")
  db.run("insert into Persons values('Chris',	'person10',	36,	'male',	'Lodz')")
  db.run("insert into Persons values('Jack',	'person11',	25,	'male',	'Poznan')")
  db.run("insert into Persons values('Jan',	'person12',	42,	'male',	'Skierniewice')")
  db.run("insert into Persons values('Kate',	'person13',	38,	'female',	'Warsaw')")
  db.run("insert into Persons values('Martyna',	'person14',	27,	'female', 'Lodz')")
  db.run("insert into Persons values('Krzysztof',	'person15',	26,	'male',	'Zgierz')")
  db.run("insert into Persons values('Alex',	'person16',	25,	'male',	'Tuszyn')")
  db.run("insert into Persons values('Amelia',	'person17',	35,	'female',	'Warsaw')")
  db.run("insert into Persons values('Michal',	'person18',	42,	'male',	'Lodz')")
  db.run("insert into Persons values('Peter',	'person19',	44,	'male',	'Krakow')")
  db.run("insert into Persons values('Marcin',	'person20',	45,	'male',	'Lodz')")
  db.run("insert into Persons values('Roman',	'person21',	23,	'male',	'Lodz')")
  db.run("insert into Persons values('Patrycja',	'person22',	25,	'female','Pabianice')")
  db.run("insert into Persons values('Dawid',	'person23',	29,	'male',	'Warsaw')")
  db.run("insert into Persons values('Andrew',	'person24',	30,	'male',	'Lodz')")

  
  db.run("create table Members(MemberName char, PersonId char, TeamId char)")
  db.run("insert into Members values('Jack',	'person1', 'team5')")
  db.run("insert into Members values('Anna',	'person2', 'team6')")
  db.run("insert into Members values('Joan',	'person3', 'team4')")
  db.run("insert into Members values('Simon',	'person4',	'team2')")
  db.run("insert into Members values('Michal',	'person5',	'team1')")
  db.run("insert into Members values('Marta',	'person6',	'team3')")
  db.run("insert into Members values('Peter',	'person7',	'team5')")
  db.run("insert into Members values('Luke',	'person8',	'team6')")
  db.run("insert into Members values('Kate',	'person9',	'team4')")
  db.run("insert into Members values('Chris',	'person10',	'team2')")
  db.run("insert into Members values('Jack',	'person11',	'team1')")
  db.run("insert into Members values('Jan',	'person12',	'team3')")
  db.run("insert into Members values('Kate',	'person13',	'team5')")
  db.run("insert into Members values('Martyna',	'person14',	'team6')")
  db.run("insert into Members values('Krzysztof',	'person15',	'team4')")
  db.run("insert into Members values('Alex',	'person16',	'team2')")
  db.run("insert into Members values('Amelia',	'person17',	'team1')")
  db.run("insert into Members values('Michal',	'person18',	'team3')")
  db.run("insert into Members values('Peter',	'person19',	'team5')")
  db.run("insert into Members values('Marcin',	'person20',	'team6')")
  db.run("insert into Members values('Roman',	'person21',	'team4')")
  db.run("insert into Members values('Patrycja',	'person22',	'team2')")
  db.run("insert into Members values('Dawid',	'person23',	'team1')")
  db.run("insert into Members values('Andrew',	'person24',	'team3')")

  db.run("create table Teams(TeamName char, TeamId char)")
  db.run("insert into Teams values('Infrastructure', 'team6')")
  db.run("insert into Teams values('Finance',	'team5')")
  db.run("insert into Teams values('Marketing',	'team4')")
  db.run("insert into Teams values('Testers', 'team3')")
  db.run("insert into Teams values('PR',	'team2')")
  db.run("insert into Teams values('Developers',	'team1')")
  
 
  db.each(`select avg(Age) as avgAge from Persons left join Members on Persons.PersonId = Members.PersonId group by TeamId`, 
           function(err, row) {
            console.log(row.avgAge);
  });

  db.each(`select max(avg_age) as maxAvg from (select avg(Age) as avg_age from Persons 
            left join Members on Persons.PersonId = Members.PersonId group by TeamId)`, 
           function(err, row) {
            console.log(row.maxAvg);
  });

   db.each(`select TeamId from 
            (select TeamId, max(avg_age) from (select TeamId, avg(Age) as avg_age from Persons 
            left join Members on Persons.PersonId = Members.PersonId group by TeamId))`, 
           function(err, row) {
            console.log(row.TeamId);
  });

  db.each(`select TeamName from Teams where TeamId =
            (select TeamId from (select TeamId, max(avg_age) from (select TeamId, avg(Age) as avg_age from Persons 
            left join Members on Persons.PersonId = Members.PersonId group by TeamId)))`, 
           function(err, row) {
            console.log(row.TeamName);
  });
  
});
 
db.close();