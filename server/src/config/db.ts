import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "mysql",
  host: process.env.MYSQL_HOST || "localhost",
  port: Number(process.env.MYSQL_PORT) || 3306,
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "3558",
  database: process.env.MYSQL_DB || "fullstacktest",
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
  synchronize: true,
  name: "default",
};

export default config;
