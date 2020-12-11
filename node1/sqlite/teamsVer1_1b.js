const sqlite3 = require('sqlite3').verbose();
const util = require("util")

var db = new sqlite3.Database(':memory:');

var hashTable = {}
var teamsQuery = 'INSERT INTO teams VALUES(:teamname);'
var personsQuery = 'INSERT INTO persons VALUES(:name, :age, :gender, :city, :dayOfBirth);'
var membersQuery = 'INSERT INTO members VALUES(:userId, :teamId);'
var lastRowidQuery = 'select last_insert_rowid()'
var lastRowid = 0

async function teams(){

    let dbRun = util.promisify(db.run.bind(db))
    let dbGet = util.promisify(db.get.bind(db))
    let dbEach = util.promisify(db.each.bind(db))

    await dbRun("create table teams(teamname char)")
    console.log("Create 'teams' done.")

    await dbRun(teamsQuery, 'Infrastructure')
    row = await dbGet("select last_insert_rowid()")
    hashTable['Infrastructure'] = row["last_insert_rowid()"]

    await dbRun(teamsQuery, 'Finance')
    row = await dbGet("select last_insert_rowid()")
    hashTable['Finance'] = row["last_insert_rowid()"]

    await dbRun(teamsQuery, 'Marketing')
    row = await dbGet("select last_insert_rowid()")
    hashTable['Marketing'] = row["last_insert_rowid()"]

    await dbRun(teamsQuery, 'Testers')
    row = await dbGet("select last_insert_rowid()")
    hashTable['Testers'] = row["last_insert_rowid()"]

    await dbRun(teamsQuery, 'PR')
    row = await dbGet("select last_insert_rowid()")
    hashTable['PR'] = row["last_insert_rowid()"]

    await dbRun(teamsQuery, 'Developers')
    row = await dbGet("select last_insert_rowid()")
    hashTable['Developers'] = row["last_insert_rowid()"]

    await dbRun(teamsQuery, 'No assignment')
    row = await dbGet("select last_insert_rowid()")
    hashTable['No assignment'] = row["last_insert_rowid()"]

    await dbRun("create table persons(name char,  age int, gender char, city char, dayOfBirth char)")
    console.log("Create 'persons' done.")

    await dbRun("create table members(userId int, teamId int)")
    console.log("Create 'members' done.")
    
    await dbRun(personsQuery, ['Jack', 24, 'male', 'Lodz', '12/10'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Infrastructure']])

    await dbRun(personsQuery, ['Anna', 30, 'female', 'Warsaw', '27/10'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Marketing']])

    await dbRun(personsQuery, ['Joan', 26, 'female', 'Warsaw', '24/01'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Testers']])

    await dbRun(personsQuery, ['Simon', 40, 'male', 'Lodz', '01/05'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['PR']])

    await dbRun(personsQuery, ['Michal', 28, 'male', 'Lodz', '04/11'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Developers']])

    await dbRun(personsQuery, ['Marta', 24, 'female', 'Poznan', '15/07'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['No assignment']])

    await dbRun(personsQuery, ['Peter', 29, 'male', 'Warsaw', '27/10'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['No assignment']])

    await dbRun(personsQuery, ['Luke', 32, 'male', 'Lodz', '29/02'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Infrastructure']])

    await dbRun(personsQuery, ['Kate', 24, 'female', 'Pabianice', '08/03'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Finance']])

    await dbRun(personsQuery, ['Chris', 36, 'male', 'Lodz', '07/12'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Marketing']])

    await dbRun(personsQuery, ['Jack', 25, 'male', 'Poznan', '10/10'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Finance']])

    await dbRun(personsQuery, ['Jan', 42, 'male', 'Skierniewice', '03/04'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Testers']])

    await dbRun(personsQuery, ['Kate', 38, 'female', 'Warsaw', '22/09'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['PR']])

    await dbRun(personsQuery, ['Martyna', 27, 'female', 'Lodz', '14/03'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Developers']])

    await dbRun(personsQuery, ['Krzysztof', 26, 'male', 'Zgierz', '27/10'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['No assignment']])

    await dbRun(personsQuery, ['Alex', 25, 'male', 'Tuszyn', '03/06'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Infrastructure']])

    await dbRun(personsQuery, ['Amelia', 35, 'female', 'Warsaw', '17/02'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Finance']])

    await dbRun(personsQuery, ['Michal', 42, 'male', 'Lodz', '05/08'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Finance']])

    await dbRun(personsQuery, ['Peter', 44, 'male', 'Krakow', '11/12'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Marketing']])

    await dbRun(personsQuery, ['Marcin', 45, 'male', 'Lodz', '03/03'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Marketing']])

    await dbRun(personsQuery, ['Roman', 23, 'male', 'Lodz', '10/07'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Testers']])

    await dbRun(personsQuery, ['Patrycja', 25, 'female', 'Pabianice', '22/01'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['Testers']])

    await dbRun(personsQuery, ['Dawid', 29, 'male', 'Warsaw', '18/11'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['PR']])

    await dbRun(personsQuery, ['Andrew', 30, 'male', 'Lodz', '07/02'])
    row = await dbGet("select last_insert_rowid()")
    lastRowid = row["last_insert_rowid()"]
    await dbRun(membersQuery, [lastRowid, hashTable['PR']])
    
    await dbEach(`select * from members `, (err,row)=>console.log(`all from members:\n ${JSON.stringify(row)}`))

    await dbEach(`select avg(age) as avgage from persons left join members on persons.ROWID = members.userId group by teamId `, 
                    (err,row)=>console.log(row.avgage))
    await dbEach(`select max(avg_age) as maxAvg from (select avg(age) as avg_age from persons
                    left join members on persons.ROWID = members.userId group by teamId)`, 
                    (err,row)=>console.log(row.maxAvg))
    await dbEach(`select teamId from 
                    (select teamId, max(avg_age) from (select teamId, avg(age) as avg_age from persons
                    left join members on persons.ROWID = members.userId group by teamId))`, 
                    (err,row)=>console.log(row.teamId))
    await dbEach(`select teamname from teams where teams.ROWID =
                    (select teamId from (select teamId, max(avg_age) from (select teamId, avg(age) as avg_age from persons
                    inner join members on persons.ROWID = members.userId group by teamId)))`, 
                    (err,row)=>console.log(row.teamname))

    console.table(`hashTable: ${JSON.stringify(hashTable)}`)

}

teams()