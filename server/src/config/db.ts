import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  synchronize: true,
  name: "default",
};

export default config;
