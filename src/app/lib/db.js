import { Pool } from "pg";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Discovery",
  password: "P@ssw0rd",
  port: 5432,
});

export default pool;
