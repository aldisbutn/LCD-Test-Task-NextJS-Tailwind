const sqlite3 = require('sqlite3').verbose();

// Connecting to or creating a new SQLite database file
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err: Error) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

// Data for seeding the database
const devicesData = [
  {
    ID: 1,
    name: 'Main Entry Intercom',
    model: '2N Verso',
    status: 'Online',
    conPct: 80,
    conStat: '235/235 messages over 28 days',
  },
  {
    ID: 2,
    name: 'Side Entry Intercom',
    model: '2N Verso',
    status: 'Offline',
    conPct: 0,
    conStat: '90/10 messages over 28 days',
  },
  {
    ID: 3,
    name: 'Main Entry Intercom',
    model: '2N Verso',
    status: 'Online',
    conPct: 95,
    conStat: '0 messages over 28 days',
  },
  { ID: 4, name: 'Device4', model: 'ModelD', status: 'Online', conPct: 60, conStat: '100/50 messages over 28 days' },
  { ID: 5, name: 'Device5', model: 'ModelE', status: 'Offline', conPct: 10, conStat: '10/90 messages over 28 days' },
  { ID: 6, name: 'Device6', model: 'ModelF', status: 'Online', conPct: 75, conStat: '50/50 messages over 28 days' },
  { ID: 7, name: 'Device7', model: 'ModelG', status: 'Offline', conPct: 20, conStat: '20/80 messages over 28 days' },
  { ID: 8, name: 'Device8', model: 'ModelH', status: 'Online', conPct: 90, conStat: '10/10 messages over 28 days' },
  { ID: 9, name: 'Device9', model: 'ModelI', status: 'Offline', conPct: 5, conStat: '80/20 messages over 28 days' },
  { ID: 10, name: 'Device10', model: 'ModelJ', status: 'Online', conPct: 30, conStat: '30/70 messages over 28 days' },
  { ID: 11, name: 'Device11', model: 'ModelK', status: 'Offline', conPct: 40, conStat: '40/60 messages over 28 days' },
  { ID: 12, name: 'Device12', model: 'ModelL', status: 'Online', conPct: 85, conStat: '15/85 messages over 28 days' },
  { ID: 13, name: 'Device13', model: 'ModelM', status: 'Offline', conPct: 25, conStat: '70/30 messages over 28 days' },
  { ID: 14, name: 'Device14', model: 'ModelN', status: 'Online', conPct: 50, conStat: '45/55 messages over 28 days' },
  { ID: 15, name: 'Device15', model: 'ModelO', status: 'Offline', conPct: 15, conStat: '60/40 messages over 28 days' },
  { ID: 16, name: 'Device16', model: 'ModelP', status: 'Online', conPct: 75, conStat: '25/75 messages over 28 days' },
  { ID: 17, name: 'Device17', model: 'ModelQ', status: 'Offline', conPct: 35, conStat: '55/45 messages over 28 days' },
  { ID: 18, name: 'Device18', model: 'ModelR', status: 'Online', conPct: 55, conStat: '35/65 messages over 28 days' },
  { ID: 19, name: 'Device19', model: 'ModelS', status: 'Offline', conPct: 45, conStat: '65/35 messages over 28 days' },
  { ID: 20, name: 'Device20', model: 'ModelT', status: 'Online', conPct: 70, conStat: '5/95 messages over 28 days' },
];

// Serialize method ensures that database queries are executed sequentially
db.serialize(() => {
  // Create the items table if it doesn't exist
  db.run(
    `CREATE TABLE IF NOT EXISTS devices (
        ID INTEGER PRIMARY KEY,
        name TEXT,
        model TEXT,
        status TEXT,
        conPct INTEGER,
        conStat TEXT
      )`,
    (err: Error) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('Created devices table.');

      // Clear the existing data in the products table
      db.run(`DELETE FROM devices`, (err: Error) => {
        if (err) {
          return console.error(err.message);
        }
        console.log('All rows deleted from devices');

        devicesData.forEach((device) => {
          const { ID, name, model, status, conPct, conStat } = device;
          db.run(
            'INSERT INTO devices (id, name, model, status, conPct, conStat) VALUES (?, ?, ?, ?, ?, ?)',
            [ID, name, model, status, conPct, conStat],
            (err: Error) => {
              if (err) {
                console.error('Error inserting data:', err);
              } else {
                console.log('Data inserted successfully');
              }
            }
          );
        });

        //   Close the database connection after all insertions are done
        db.close((err: Error) => {
          if (err) {
            return console.error(err.message);
          }
          console.log('Closed the database connection.');
        });
      });
    }
  );
});
