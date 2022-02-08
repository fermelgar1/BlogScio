const parse = require("pg-connection-string").parse;
const config = parse(
  "postgres://ywyuzstkuudegd:d9d452ea810b0349af6e3b04a7bb0a553d7be4a87e9384177704629356824c35@ec2-23-20-73-25.compute-1.amazonaws.com:5432/d7dcs5ip38vhl4"
);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});
