import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
  user: 'postgrees',
  host: 'localhost',
  database: 'econometer_db',
  password: 'postgrees',
  port: 5432,
});

export default pool;
