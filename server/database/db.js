const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydb.sqlite');

db.prepare(
  `
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    status TEXT DEFAULT 'unverified',
    last_login TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`
).run();
module.exports = db;
