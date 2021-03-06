import mysql from 'mysql';

/* istanbul ignore next */
if (
  !process.env.SQL_HOST ||
  !process.env.SQL_USERNAME ||
  !process.env.SQL_PASSWORD
) {
  console.error('DB connection info missing.'); // eslint-disable-line no-console
  process.exit(1);
}

const getConn = () =>
  mysql.createConnection({
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    user: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
  });

export default (qr, cb) => {
  const conn = getConn();
  conn.query(qr, (err, rows) => {
    cb(err, rows);
  });
  conn.end();
};
