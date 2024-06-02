import mysql from "mysql2/promise";

export const mysqlClient = {
  initialized: false,
  initialize,
  connection: null,
};

async function initialize() {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "zxc123zxc",
    database: "blog",
  });
  mysqlClient.initialized = true;
  mysqlClient.connection = connection;
}

export { initialize };
