const express    = require('express');
const router     = express.Router();


router.get('/', (req, res) => res.render('index', {header: 'home'}));
router.get('/about', (req, res) => res.render('index', {header: 'about' }));
router.get('/contact', (req, res) => res.render('index', {header: 'contact' }));


module.exports = router;
