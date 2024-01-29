class Db {
  constructor() {
    this.Sequelize =  require("sequelize");
  }

  init() {
    const dbName = process.env.PGDATABASE;
    const dbUserName = process.env.PGUSER;
    const dbPassword = process.env.PGPASSWORD;
    const dbHost = process.env.PGHOST;
    const dbPort = process.env.PGPORT;

    return new this.Sequelize(dbName, dbUserName, dbPassword, {
      host: dbHost,
      port: dbPort,
      dialect: "postgres",
    });
  }
}

module.exports = new Db().init();
