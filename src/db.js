import mysql from 'mysql2/promise';
import 'dotenv/config';

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'iauser',
  password: process.env.DB_PASSWORD || 'iapass',
  database: process.env.DB_NAME || 'IA',
  waitForConnections: true,
  connectionLimit: 10,
  timezone: 'Z',
  dateStrings: false
});

export async function query(sql, params) {
  const [rows] = await pool.execute(sql, params);
  return rows;
}

export async function getConnection() {
  return pool.getConnection();
}
