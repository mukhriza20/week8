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

router.get('/category', (req, res) => {
    pool.query(`SELECT * FROM film_category fc INNER JOIN film f ON fc.film_id = f.film_id INNER JOIN 
    category c ON fc.category_id = c.category_id WHERE c.name = '${req.params.category}`,
    (err, result) =>{
        if (err) {
            throw err;
        }
        res.send(result.rows);
    });
});

module.exports = router;