const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.post,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectunauthorized: false,
      },
    },
    debug: false,
  },
});
