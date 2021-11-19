module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME,
  "ssl": true,
  "extra": {
    "ssl": { "rejectUnauthorized": false },
  },
  "entities": ["src/entities/*.js"],
  "cli": {
    "migrationsDir": "src/database/migrations",
  },
  "migrations": ["src/database/migrations/*.js"],
};
