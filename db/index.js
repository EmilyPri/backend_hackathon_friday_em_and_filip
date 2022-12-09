import pg from "pg";

const databaseUrl = process.env.DATABASE_URL;

if (undefined === databaseUrl) {
  throw new Error(
    "Your database URL is undefined. You need to fix this before you continue."
  );
}

export const pool = new pg.Pool({
  connectionString: databaseUrl,
});