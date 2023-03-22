const router = require('express').Router()
// const db = require('./models')

let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
}]

router.get('/', (req, res) => {
    res.render("places/index", { places: places })
    //    db.Place.find()
    //   .then((places) => {
    //       res.render('places/index', { places })
    //  })
    //  .catch(err => {
    //      console.log('err', err)
    //      res.render('error404')
    //  })
})

router.get('/new', (req, res) => {
    res.render('places/new')
  })

  

  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
  router.get('/:id', (req, res) => {
    res.render('places/show', { place: places[id] })
  })
  
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.render('places/show', { place: places[id] })
    }
  })
  



module.exports = router
