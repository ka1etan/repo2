var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

var hashTable = {}
var teamsQuery = 'INSERT INTO teams VALUES(:teamname);'
var lastRowidQuery = 'select last_insert_rowid()'

db.serialize(()=> {

    db.run("create table teams(teamname char)")
    db.run(teamsQuery, 'Infrastructure')
    // db.run(lastRowidQuery, ()=>{
    //     hashTable['Infrastructure'] = 1
    //     console.table(`hashTable: ${JSON.stringify(hashTable)}`)
    // })
    // db.each(lastRowidQuery, (err, row) => {
    //     hashTable['Infrastructure'] = row['last_insert_rowid()']
    // })
    // await db.each(lastRowidQuery, (err, row) => {
    //     hashTable['Infrastructure'] = row['last_insert_rowid()']})

    async function hash() {

        //return hash = await new Promise(() => {
                        //hashTable['Infrastructure'] = 1
            // let dbEach = await db.each(lastRowidQuery, (err, row) => {
            //     hashTable['Infrastructure'] = row['last_insert_rowid()']
            // })
            // return await dbEach
        //})

        console.log('loading...')

        // ver1

        // await db.run(lastRowidQuery, ()=>{
        //     hashTable['Infrastructure'] = 1
        //     console.table(`hashTable: ${JSON.stringify(hashTable)}`)
        // })

        // ver2

        return await new Promise(resolve=>

            db.run(lastRowidQuery, ()=>{
                
                    hashTable['Infrastructure'] = 1
                    console.table(`hashTable: ${JSON.stringify(hashTable)}`)
            })
        )
    }

    hash().then(
        console.table(`hashTable: ${JSON.stringify(hashTable)}`)
    )
    
     //console.table(`hashTable: ${JSON.stringify(hashTable)}`)
})

db.close()

// async function hash(){

//     return hash = await new Promise(()=>{
//         console.log('loading...')
//         hashTable['Infrastructure'] = 1})
// }

// function awaiTest(){

//     hash().then(
//         console.table(`hashTable: ${JSON.stringify(hashTable)}`)
//     )
// }

// awaiTest()

