import { pool } from "../db/index.js";

export async function getChristmasList() {
  const data = await pool.query("SELECT * FROM christmasList;");
  return data.rows;
}

export async function newChristmasItem(listItem) {
  const { item, completed } = listItem;
  const data = await pool.query(
    `INSERT INTO christmasList (
      item,
      completed
    ) VALUES ($1,$2) RETURNING *;`,
    [item, completed]
  );
  return data.rows[0];
}

export async function markAsCompleted(id, completed){
  const data = await pool.query(
    `UPDATE christmasList SET completed = $1 WHERE id=$2 RETURNING *;`,
    [completed, id]
  );
  return data.rows[0];
}

export async function deleteChristmasItem(id) {
  const data = await pool.query(
    `DELETE * from christmasList where id=$1 RETURNING *;`,
    [id]
  );
  return data.rows[0];
}