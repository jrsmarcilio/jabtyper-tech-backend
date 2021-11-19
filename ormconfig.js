console.log(process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": ["src/entities/*.js"],
  "cli": {
    "migrationsDir": "src/database/migrations",
  },
  "migrations": ["src/database/migrations/*.js"],
  "entitiesDir": "src/entities/",
};
