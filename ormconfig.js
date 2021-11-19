module.exports = {
  "type": "postgres",
  "URL": "postgres://liwhdibhtlrqvv:601628763f7c30da922e3a4e22e58e3f5cff6eca3fd92e3a6facea45af77a8ae@ec2-3-92-15-1.compute-1.amazonaws.com:5432/d7tk282k4c14f9",
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
