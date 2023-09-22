// khai báo express
const express = require('express')
const { render } = require('../app')

// khai báo router ( Controller)
const router = express.Router()

//render ra trang home (views/index.hbs)
//url: localhost:3000
router.get('/', (req, res) => {
  res.render('index')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/video', (req, res) => {
  res.render('video')
})

router.get('/demo', (req, res) => {
  // gửi data từ BE sang FE
  var year = 2023
  var country = "Vietnam"
  var name = "Tien"
  var music = ['POP', 'Rock', 'EDM']
  var namemusic = ['POP', 'Rock', 'EDM']
  res.render('demo', {
    name : name, 
    year :  year, 
    country : country,
    music : music, 
    namemusic : namemusic
  })
})

// export module router
module.exports = router



// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
