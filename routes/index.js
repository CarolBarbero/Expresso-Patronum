var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Gatitos' });
});

router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});

module.exports = router;