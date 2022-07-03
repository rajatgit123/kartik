const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "password123",
    host: "database-1.cnuz8nadorxl.ap-south-1.rds.amazonaws.com",
    port: 5432,
    database: "database-1", 
});

module.exports = pool;
