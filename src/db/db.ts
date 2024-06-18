import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DB_USER || !process.env.DB_DATABASE || !process.env.DB_PASS) {
  if (!process.env.DB_USER) {
    console.error("DB_USER environment variable is missing");
  }
  if (!process.env.DB_DATABASE) {
    console.error("DB_DATABASE environment variable is missing");
  }
  if (!process.env.DB_PASS) {
    console.error("DB_PASS environment variable is missing");
  }
  process.exit(1);
}

//!  ---------------------------------- POOL ---------------------------------------------------------

export const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: 5432,
});

//! -------------------------------------------------------------------------------------------------------
