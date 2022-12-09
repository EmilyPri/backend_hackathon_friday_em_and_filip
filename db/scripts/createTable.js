import { pool } from "../index.js";

async function createTable() {
  const newTable = await pool.query(
    `CREATE TABLE IF NOT EXISTS christmasList (
      id SERIAL PRIMARY KEY,
      item TEXT NOT NULL,
      completed BOOL NOT NULL
    );`
  );
  console.log("Christmas List Created!", newTable.command);
}

try {
  await createTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
