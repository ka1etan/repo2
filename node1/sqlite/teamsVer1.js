var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

db.serialize(function () {

  db.run("create table persons(name char,  age int, gender char, city char, dayOfBirth char)")
  db.run("insert into persons values('Jack',  24, 'male', 'Lodz', '12/10')")
  db.run("insert into persons values('Anna',		30,	'female',	'Warsaw', '27/10')")
  db.run("insert into persons values('Joan',		26,	'female',	'Warsaw', '24/01' )")
  db.run("insert into persons values('Simon',		40,	'male',	'Lodz', '01/05')")
  db.run("insert into persons values('Michal',		28,	'male',	'Lodz', '04/11')")
  db.run("insert into persons values('Marta',		24,	'female',	'Poznan', '15/07')")
  db.run("insert into persons values('Peter',		29,	'male',	'Warsaw', '27/10')")
  db.run("insert into persons values('Luke',		32,	'male',	'Lodz', '29/02')")
  db.run("insert into persons values('Kate',		24,	'female',	'Pabianice', '08/03')")
  db.run("insert into persons values('Chris',		36,	'male',	'Lodz', '07/12')")
  db.run("insert into persons values('Jack',		25,	'male',	'Poznan', '10/10')")
  db.run("insert into persons values('Jan',		42,	'male',	'Skierniewice', '03/04')")
  db.run("insert into persons values('Kate',		38,	'female',	'Warsaw', '22/09')")
  db.run("insert into persons values('Martyna',		27,	'female', 'Lodz', '14/03')")
  db.run("insert into persons values('Krzysztof',		26,	'male',	'Zgierz', '27/10')")
  db.run("insert into persons values('Alex',		25,	'male',	'Tuszyn', '03/06')")
  db.run("insert into persons values('Amelia',		35,	'female',	'Warsaw' , '17/02')")
  db.run("insert into persons values('Michal',		42,	'male',	'Lodz', '05/08')")
  db.run("insert into persons values('Peter',		44,	'male',	'Krakow', '11/12')")
  db.run("insert into persons values('Marcin',		45,	'male',	'Lodz', '03/03')")
  db.run("insert into persons values('Roman',		23,	'male',	'Lodz', '10/07')"),
  db.run("insert into persons values('Patrycja',		25,	'female','Pabianice', '22/01')")
  db.run("insert into persons values('Dawid',		29,	'male',	'Warsaw', '18/11')")
  db.run("insert into persons values('Andrew',		30,	'male',	'Lodz', '07/02')")


  db.run("create table teams(teamname char)")
  db.run("insert into teams values('Infrastructure')")
  db.run("insert into teams values('Finance')")
  db.run("insert into teams values('Marketing')")
  db.run("insert into teams values('Testers')")
  db.run("insert into teams values('PR')")
  db.run("insert into teams values('Developers')")
  db.run("insert into teams values('No assignment')")


  db.run("create table members(userId int, teamId int)")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Jack' and age='25' and gender='male'\n"+
  "and city='Poznan' and dayOfBirth='10/10') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Finance') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Jack' and age='24' and gender='male'\n"+
  "and city='Lodz' and dayOfBirth='12/10') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Infrastructure') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Anna' and age='30' and gender='female'\n"+
  "and city='Warsaw' and dayOfBirth='27/10') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Marketing') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Joan' and age='26' and gender='female'\n"+
  "and city='Warsaw' and dayOfBirth='24/01') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Testers') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Simon' and age='40' and gender='male'\n"+
  "and city='Lodz' and dayOfBirth='01/05') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='PR') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Michal' and age='28' and gender='male'\n"+
  "and city='Lodz' and dayOfBirth='04/11') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Developers') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Marta' and age='24' and gender='female'\n"+
  "and city='Poznan' and dayOfBirth='15/07') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='No assignment') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Peter' and age='29' and gender='male'\n"+
  "and city='Warsaw' and dayOfBirth='27/10') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='No assignment') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Luke' and age='32' and gender='male'\n"+
  "and city='Lodz' and dayOfBirth='29/02') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Infrastructure') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Kate' and age='24' and gender='female'\n"+
  "and city='Pabianice' and dayOfBirth='08/03') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Finance') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Chris' and age='36' and gender='male'\n"+
  "and city='Lodz' and dayOfBirth='07/12') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Marketing') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Jan' and age='42' and gender='male'\n"+
  "and city='Skierniewice' and dayOfBirth='03/04') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Testers') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Kate' and age='38' and gender='female'\n"+
  "and city='Warsaw' and dayOfBirth='22/09') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='PR') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Martyna' and age='27' and gender='female'\n"+
  "and city='Lodz' and dayOfBirth='14/03') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Developers') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Krzysztof' and age='26' and gender='male'\n"+
  "and city='Zgierz' and dayOfBirth='27/10') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='No assignment') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Alex' and age='25' and gender='male'\n"+
  "and city='Tuszyn' and dayOfBirth='03/06') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Infrastructure') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Amelia' and age='35' and gender='female'\n"+
  "and city='Warsaw' and dayOfBirth='17/02') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Finance') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Michal' and age='42' and gender='male'\n"+
  "and city='Lodz' and dayOfBirth='05/08') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Finance') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Peter' and age='44' and gender='male'\n"+
  "and city='Krakow' and dayOfBirth='11/12') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Marketing') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Marcin' and age='45' and gender='male'\n"+
  "and city='Lodz' and dayOfBirth='03/03') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Marketing') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Roman' and age='23' and gender='male'\n"+
  "and city='Lodz' and dayOfBirth='10/07') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Testers') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Patrycja' and age='25' and gender='female'\n"+
  "and city='Pabianice' and dayOfBirth='22/01') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='Testers') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Dawid' and age='29' and gender='male'\n"+
  "and city='Warsaw' and dayOfBirth='18/11') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='PR') as tempB\n" +
  "on tempA.commonId = tempB.commonId")
  db.run("insert into members select tempUser, tempTeam from\n"+ 
  "(select persons.ROWID as tempUser, 1 as commonId from persons\n" +
  "where name='Andrew' and age='30' and gender='male'\n"+
  "and city='Lodz' and dayOfBirth='07/02') as tempA\n" +
  "left join\n" +
  "(select teams.ROWID as tempTeam, 1 as commonId from teams where teamname='PR') as tempB\n" +
  "on tempA.commonId = tempB.commonId")

 db.each(`select * from members `,
    function (err, row) {
      console.log(`all from members:\n ${JSON.stringify(row)}`);
    });

    // db.each(`select 3 as temp from members2 `,
    // function (err, row) {
    //   console.log(`temp from members2:\n ${row.temp}`);
    // });


  db.each(`select avg(age) as avgage from persons left join members on persons.ROWID = members.userId group by teamId`,
    function (err, row) {
      console.log(row.avgage);
    });


  db.each(`select max(avg_age) as maxAvg from (select avg(age) as avg_age from persons 
            left join members on persons.ROWID = members.userId group by teamId)`,
    function (err, row) {
      console.log(row.maxAvg);
    });


  db.each(`select teamId from 
            (select teamId, max(avg_age) from (select teamId, avg(age) as avg_age from persons 
            left join members on persons.ROWID = members.userId group by teamId))`,
    function (err, row) {
      console.log(row.teamId);
    });

  db.each(`select teamname from teams where teams.ROWID =
            (select teamId from (select teamId, max(avg_age) from (select teamId, avg(age) as avg_age from persons 
            inner join members on persons.ROWID = members.userId group by teamId)))`,
    function (err, row) {
      console.log(row.teamname);
    });

});

db.close();