const express = require('express')
const router = express.Router()

router.get("/", (req, res, next) => {
  res.render("index")
})


// route params
router.get('/vuelos/:origin_city/:destination_city/:departure_date', (req, res) => {

  const { origin_city, destination_city, departure_date } = req.params

  console.log('---------')
  console.log('Este es el objeto req.params:', req.params)
  console.log('Debes enviar a la BBDD como origen', origin_city)
  console.log('Debes enviar a la BBDD como destino', destination_city)
  console.log('Debes enviar a la BBDD como fecha ida', departure_date)
  console.log('---------')

  res.send('<h1>¡Mira la terminal!</h1>')
})


// query strings
router.get('/tienda', (req, res) => {

  console.log('---------')
  console.log('Este es el objeto de Query Strings:', req.query)
  console.log('---------')

  res.send('<h1>¡Mira la terminal!</h1>')
})




// Flights search form render
router.get('/buscar', (req, res) => {
  res.render('search-form')
})



// Flights search form handling
router.get('/resultados', (req, res) => {

  const { origin_city, destination_city, adults, departure_date } = req.query

  console.log('Los datos son', origin_city, departure_date, destination_city, adults)

  res.render('search-results', req.query)
})



module.exports = router