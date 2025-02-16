const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.error("database connection failed:", err.message);
    } else {
        console.log("connected to SQLite database.");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS note (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT NOT NULL
    );      
`);

db.run(`
    CREATE TABLE IF NOT EXISTS exam (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        done INTEGER NOT NULL DEFAULT 0,
        fav INTEGER NOT NULL DEFAULT 0
    );
`);

function createNote(title, content, callback) {
    db.run(
        `INSERT INTO note (title, content) VALUES (?, ?)`,
        [title, content],
        (err) => {
            if (err) return callback(err, null);
            callback(null, { id: this.lastID, title, content });
        }
    );
}

function getNotes(title, callback) {
    db.all(
        `SELECT id, title, content FROM note WHERE title = ?`,
        [title],
        (err, rows) => {
            if (err) return callback(err, null);
            callback(null, rows);
        }
    );
}

function markDone(title, callback) {
    db.run("UPDATE exam SET done = ? WHERE title = ?", [1, title], (err) => {
        if (err) return callback(err, null);
        callback(null, null);
    });
}

module.exports = {
    createNote,
    getNotes,
    markDone,
};
