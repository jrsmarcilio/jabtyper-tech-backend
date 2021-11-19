module.exports = {
  "type": "postgres",
  "URL": process.env.DATABASE_URL,
  "ssl": true,
  "extra": {
    "ssl": { "rejectUnauthorized": false },
  },
  "entities": ["src/entities/*.js"],
  "cli": {
    "migrationsDir": "src/database/migrations",
  },
  "migrations": ["src/database/migrations/*.js"],
  "entitiesDir": "src/entities",
};
