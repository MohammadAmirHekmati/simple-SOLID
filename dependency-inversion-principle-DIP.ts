interface Database {
    connect(): void;
  }
  
  class MySQLDatabase implements Database {
    connect() {
      console.log('Connecting to MySQL');
    }
  }
  
  class Application {
    constructor(private db: Database) {}
  
    start() {
      this.db.connect();
    }
  }
  
  const mySQLDatabase = new MySQLDatabase();
  const app = new Application(mySQLDatabase);
  app.start(); // Connecting to MySQL
  