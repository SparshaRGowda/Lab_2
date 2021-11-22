const express = require('express')
const router = express.Router()
const {
  registerRestaurant,
  authRestaurant,
} = require('../controllers/restaurantController')

router.route('/restaurantSignUp').post(registerRestaurant)
router.route('/authRestaurant').post(authRestaurant)

module.exports = router
