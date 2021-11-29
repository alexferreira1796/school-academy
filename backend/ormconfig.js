require('dotenv').config();

const config = {
  type: process.env.TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  /*extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },*/
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/database/entities/*.ts'],
  seeds: ['./src/database/seeds/**/*{.ts,.js}'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};

module.exports = config;
