const sqlite3 = require('sqlite3').verbose();
const sqlite = require("sqlite")

async function main()
{
    const db = await sqlite.open({
        filename: ':memory:',
        driver: sqlite3.Database
      })
      
    await db.exec("CREATE TABLE lorem (info TEXT)")
    console.log("Database created")

    let stmt = await db.prepare("INSERT INTO lorem VALUES (?)");
    for (let i = 0; i < 10; i++) 
    {
      await stmt.run("Ipsum " + i);
    }
    console.log("Inserts done.")

    let rowCount = await db.each(
        "SELECT rowid AS id, info FROM lorem", 
        (err, row) => console.log(row.id + ": " + row.info)
    );
    console.log("Rows enumerated - " + rowCount)

    row = await db.get("select last_insert_rowid()");
    console.log("Row id: " + row["last_insert_rowid()"]);
  
  
  
  


}

main()