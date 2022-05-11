var sqlite3 = require('sqlite3').verbose()
const DBSOURCE = "expensedb.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
   if (err) {
      console.error(err.message)
      throw err
   }else{
      console.log('Connected to the SQLite database.')
      db.run('DROP TABLE IF EXISTS expense;');
      db.run(`CREATE TABLE IF NOT EXISTS expense (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         item text, 
         amount real, 
         category text, 
         location text, 
         spendOn text, 
         createdOn text 
         )`,
            (err) => {
               if (err) {
                  console.log(err);
               }else{
                  var insert = 'INSERT INTO expense (item, amount, category, location, spendOn, createdOn) VALUES (?,?,?,?,?,?)';

                  db.run(insert, ['Pizza Margetta', 10, 'Food', 'KFC', '2020-05-26 10:10', '2020-05-26 10:10']);
                  db.run(insert, ['Pizza Chicken', 9, 'Food', 'Mcdonald', '2020-05-28 11:10', '2020-05-28 11:10']);
                  db.run(insert, ['Burger', 12, 'Food', 'Mcdonald', '2020-05-29 09:22', '2020-05-29 09:22']);
                  db.run(insert, ['Pizza Spinat', 15, 'Food', 'KFC', '2020-06-06 16:18', '2020-06-06 16:18']);
                  db.run(insert, ['Chicken Nuget', 14, 'Food', 'Mcdonald', '2020-06-01 18:14', '2020-05-01 18:14']);
                  db.run(insert, ['Oil change', 50, 'Car', 'Mcdonald', '2021-06-01 18:14', '2021-05-01 18:14']);
                  db.run(insert, ['Pho', 12, 'Food', 'Hanoi October', '2021-06-01 18:14', '2021-05-01 18:14']);
                  db.run(insert, ['Beef Curry', 13, 'Food', 'Hanoi October', '2021-06-01 18:14', '2021-05-01 18:14']);
               }
            }
      );  
   }
});

module.exports = db