var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

var checkVariable = 'Infrastructure'
var i = 0
var hashTable = {}
var teamsQuery = 'INSERT INTO teams VALUES(:teamname);'
var personsQuery = 'INSERT INTO persons VALUES(:name, :age, :gender, :city, :dayOfBirth);'
var membersQuery = 'INSERT INTO members VALUES(:userId, :teamId);'
var lastRowidQuery = 'select last_insert_rowid()'
var lastRowid = 0

function dbrunHelper(array, callback) {
  callback(array)
}

db.serialize(function () {

  db.run("create table teams(teamname char)")
  db.run(teamsQuery, checkVariable)
  db.each(lastRowidQuery, (err, row) => {
    hashTable[checkVariable] = row['last_insert_rowid()']
  })
  db.run(teamsQuery, 'Finance')
  db.each(lastRowidQuery, (err, row) => { hashTable['Finance'] = row['last_insert_rowid()'] })
  db.run(teamsQuery, 'Marketing')
  db.each(lastRowidQuery, (err, row) => { hashTable['Marketing'] = row['last_insert_rowid()'] })
  db.run(teamsQuery, 'Testers')
  db.each(lastRowidQuery, (err, row) => { hashTable['Testers'] = row['last_insert_rowid()'] })
  db.run(teamsQuery, 'PR')
  db.each(lastRowidQuery, (err, row) => { hashTable['PR'] = row['last_insert_rowid()'] })
  db.run(teamsQuery, 'Developers')
  db.each(lastRowidQuery, (err, row) => { hashTable['Developers'] = row['last_insert_rowid()'] })
  db.run(teamsQuery, 'No assignment')
  db.each(lastRowidQuery, (err, row) => {
    hashTable['No assignment'] = row['last_insert_rowid()']
  })

  db.run("create table persons(name char,  age int, gender char, city char, dayOfBirth char)")
  db.run("create table members(userId int, teamId int)")
  db.run(personsQuery, ['Jack', 24, 'male', 'Lodz', '12/10'])
  db.each(lastRowidQuery,
    (err, row) => {
      lastRowid = row['last_insert_rowid()'];
      console.log(`hashtable ${JSON.stringify(hashTable)}`);
    })

  //db.each(console.log(`log on db each ${lastRowid}`))
  db.run(membersQuery, [lastRowid, hashTable['Infrastructure']])
  db.run(personsQuery, ['Anna', 30, 'female', 'Warsaw', '27/10'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()']; })
  //let tmp = []
  db.all(lastRowidQuery,
    (err, row) => {
      console.log(`lastrowid,hashtable from dbAll: ${lastRowid} ${hashTable['Marketing']}`);
    })

  db.run(membersQuery, [lastRowid, hashTable['Marketing']])

  db.run(personsQuery, ['Joan', 26, 'female', 'Warsaw', '24/01'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Testers']])
  db.run(personsQuery, ['Simon', 40, 'male', 'Lodz', '01/05'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['PR']])
  db.run(personsQuery, ['Michal', 28, 'male', 'Lodz', '04/11'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Developers']])
  db.run(personsQuery, ['Marta', 24, 'female', 'Poznan', '15/07'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['No assignment']])
  db.run(personsQuery, ['Peter', 29, 'male', 'Warsaw', '27/10'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['No assignment']])
  db.run(personsQuery, ['Luke', 32, 'male', 'Lodz', '29/02'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Infrastructure']])
  db.run(personsQuery, ['Kate', 24, 'female', 'Pabianice', '08/03'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Finance']])
  db.run(personsQuery, ['Chris', 36, 'male', 'Lodz', '07/12'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Marketing']])
  db.run(personsQuery, ['Jack', 25, 'male', 'Poznan', '10/10'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Finance']])
  db.run(personsQuery, ['Jan', 42, 'male', 'Skierniewice', '03/04'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Testers']])
  db.run(personsQuery, ['Kate', 38, 'female', 'Warsaw', '22/09'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['PR']])
  db.run(personsQuery, ['Martyna', 27, 'female', 'Lodz', '14/03'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Developers']])
  db.run(personsQuery, ['Krzysztof', 26, 'male', 'Zgierz', '27/10'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['No assignment']])
  db.run(personsQuery, ['Alex', 25, 'male', 'Tuszyn', '03/06'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Infrastructure']])
  db.run(personsQuery, ['Amelia', 35, 'female', 'Warsaw', '17/02'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Finance']])
  db.run(personsQuery, ['Michal', 42, 'male', 'Lodz', '05/08'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Finance']])
  db.run(personsQuery, ['Peter', 44, 'male', 'Krakow', '11/12'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Marketing']])
  db.run(personsQuery, ['Marcin', 45, 'male', 'Lodz', '03/03'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Marketing']])
  db.run(personsQuery, ['Roman', 23, 'male', 'Lodz', '10/07'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Testers']])
  db.run(personsQuery, ['Patrycja', 25, 'female', 'Pabianice', '22/01'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['Testers']])
  db.run(personsQuery, ['Dawid', 29, 'male', 'Warsaw', '18/11'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['PR']])
  db.run(personsQuery, ['Andrew', 30, 'male', 'Lodz', '07/02'])
  db.each(lastRowidQuery, (err, row) => { lastRowid = row['last_insert_rowid()'] })
  db.run(membersQuery, [lastRowid, hashTable['PR']])


  db.each(`select * from persons `,
    function (err, row) {
      //console.log(`all from persons:\n ${JSON.stringify(row)}`);

    });



  db.each(`select * from members `,
    function (err, row) {
      console.log(`all from members:\n ${JSON.stringify(row)}`);

    });

  db.each(`select teamname from teams `,
    function (err, row) {
      //console.log(row.teamname);

      //   i++
      //   let tmp = row.teamname
      //   hashTable[i] = tmp

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
      console.log(`hashtable1: ${JSON.stringify(hashTable)}`)
    });

});


db.close();




