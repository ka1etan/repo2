const sqlite3 = require('sqlite3').verbose();
const util = require("util")
 
function makePromise(exec, handler)
{
  return new Promise(
      (resolve, reject) =>
      {
          exec(
              (err, data) => 
              {
                  handler(err, data)

                  if (err) 
                  {
                      reject(err)
                  }
                  else
                  {
                      resolve(data)
                  }
              }
          )
      }
  )
}

async function main()
{
  let db = new sqlite3.Database(':memory:');
  dbRun = util.promisify(db.run.bind(db))

  let create = dbRun("CREATE TABLE lorem (info TEXT)")
  // console.log("Create done.")

  let insert = ignore => 
  {
    let stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) 
    {
      stmt.run("Ipsum " + i);
    }
  
    let stmtFinalize = util.promisify(stmt.finalize.bind(stmt))
    return stmtFinalize()
    // console.log("Inserts done.")
  }

  let enumerateAll = ignore =>
  {
    let dbEach = util.promisify(db.each.bind(db))

    return dbEach(
        "SELECT rowid AS id, info FROM lorem", 
        (err, row) => console.log(row.id + ": " + row.info)
    );
  }

  let getRowId = ignore =>
  {
    let dbGet = util.promisify(db.get.bind(db))
    return dbGet("select last_insert_rowid()");
  }

  row = await create
    .then(insert)
    .then(enumerateAll)
    .then(getRowId)

  console.log("Row id: " + row["last_insert_rowid()"]);

}


async function main2()
{
  let db = new sqlite3.Database(':memory:');
  dbRun = util.promisify(db.run.bind(db))

  await dbRun("CREATE TABLE lorem (info TEXT)")
  console.log("Create done.")


  let stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (let i = 0; i < 10; i++) 
  {
    stmt.run("Ipsum " + i);
  }

  let stmtFinalize = util.promisify(stmt.finalize.bind(stmt))
  await stmtFinalize()
  console.log("Inserts done.")

  let dbEach = util.promisify(db.each.bind(db))

  await dbEach(
      "SELECT rowid AS id, info FROM lorem", 
      (err, row) => console.log(row.id + ": " + row.info)
  );

  let dbGet = util.promisify(db.get.bind(db))
  row = await dbGet("select last_insert_rowid()");
  console.log("Row id: " + row["last_insert_rowid()"]);

}

async function main1()
{
  var db = new sqlite3.Database(':memory:');

  //  db.serialize(function() 
  {
    await makePromise(
      handler => db.run("CREATE TABLE lorem (info TEXT)", handler),
      (err, data) => console.log("Create done" + (err ? " - has error" : ""))
    )

    var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }

    await makePromise(
      handler => stmt.finalize(handler), 
      (err, row) => console.log("Inserts done" + (err ? " - has error" : ""))
    );
   

    await makePromise(
      handler => db.each(
        "SELECT rowid AS id, info FROM lorem", function(err, row) 
        {
            console.log(row.id + ": " + row.info);
        }, 
        handler
        ),
        (err, row) => console.log("Select done" + (err ? " - has error" : ""))
    );
  

    row = await makePromise(
      handler => db.get("select last_insert_rowid()", handler),
        (err, row) => console.log("Select last insert done" + (err ? " - has error" : ""))
    );
    console.log("Row id: " + row["last_insert_rowid()"]);
  }
  //);
  
  
   
  db.close();  
}

main()
