var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

var lastRowid = 0
var hashTable = {}
var teamsQuery = 'INSERT INTO teams VALUES(:teamname);'
var membersQuery = 'INSERT INTO members VALUES(:userId, :teamId);'
var lastRowidQuery = 'select last_insert_rowid()'

db.serialize(function () {

    db.run("create table teams(teamname char)")
    db.run(teamsQuery, 'Infrastructure')
    db.each(lastRowidQuery, (err, row) => {
        hashTable['Infrastructure'] = row['last_insert_rowid()']
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

    let sqlPromise = new Promise((resolve, reject)=> db.all(lastRowidQuery,
        (err, row) => {
            console.log(`lastrowid,hashtable from dbAll: ${lastRowid} ${hashTable['Marketing']}`)
            
            db.serialize(function () {
            db.run("create table members(teamId int)")
            db.run(membersQuery, hashTable['Infrastructure'])
            // db.serialize(function () {
            // db.each(`select * from teams `, function (err, row) {
            // console.log(`all from members:\n ${JSON.stringify(row)}`)})
            resolve('ok')
        });
    }))

    sqlPromise.then(()=>{
    db.each(`select * from members `,
        function (err, row) {
          console.log(`all from members:\n ${JSON.stringify(row)}`);
    
        });
    })
})

db.close();