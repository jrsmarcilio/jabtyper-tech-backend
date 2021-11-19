module.exports = {
  "type": "postgres",
  "host": "ec2-3-92-15-1.compute-1.amazonaws.com",
  "port": 5432,
  "username": "liwhdibhtlrqvv",
  "password": "601628763f7c30da922e3a4e22e58e3f5cff6eca3fd92e3a6facea45af77a8ae",
  "database": "d7tk282k4c14f9",
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
