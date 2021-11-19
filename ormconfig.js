console.log(process.env.DATABASE_URL);
module.exports = {
  type: "postgres",
  URL: process.env.DATABASE_URL,
  cli: {
    migrationsDir: "src/database/migrations",
  },
  migrations: ["src/database/migrations/*.js"],
  entities: ["src/entities/*.js"],
};
