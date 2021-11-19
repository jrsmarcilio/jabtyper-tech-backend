module.exports = {
  type: "postgres",
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  port: 5432,
  password: process.env.PASSWORD,
  DATABASE_URL: process.env.DATABASE_URL,
  ssl: true,
  extra: {
    ssl: { rejectUnauthorized: false },
  },
  entities: ["src/entities/*.js"],
  cli: {
    migrationsDir: "src/database/migrations",
  },
  migrations: ["src/database/migrations/*.js"],
  entitiesDir: "src/entities",
};
