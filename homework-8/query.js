const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'mmovies',
    password: '20*Nisa',
    port: 5432,
});

module.exports = pool;