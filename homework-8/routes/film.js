var express = require('express');
var router = express.Router();
var pool = require('../query.js');

router.get('/', (req, res) => {
    pool.query('SELECT * FROM film',  (err, result) =>{
        if (err) {
            throw err;
        }
        res.send(result.rows);
    });
});

router.get('/id', (req, res) => {
    pool.query(`SELECT * FROM film WHERE film_id = ${req.params.id}`,  (err, result) =>{
        if (err) {
            throw err;
        }
        res.send(result.rows);
        }
    );
});

module.exports = router;