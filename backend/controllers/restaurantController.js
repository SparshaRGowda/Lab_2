const asyncHandler = require('express-async-handler')
const kafka = require('../kafka/client')
const Restaurant = require('../models/restaurantModel')

const registerRestaurant = asyncHandler(async (req, res) => {
  kafka.make_request('signup_restaurant', req.body, (err, results) => {
    if (err) {
      res.status(500).json({
        error: err,
      })
    } else {
      //res.status(201).json(results)
      res.status(200).send({
        results,
      })
    }

    /* if (err) {
      res.status(500).json({
        error: err,
      })
    }
    if (results.error) {
      res.status(500).json({
        error: results.error,
      })
    } else {
      console.log(results)
      res.status(201).json({
        results,
      })
    }*/
  })
})

const authRestaurant = asyncHandler(async (req, res) => {
  //console.log(req.userId)
  kafka.make_request('auth_restaurant', req.body, (err, results) => {
    if (err) {
      res.status(500).json({
        error: err,
      })
    } else {
      //console.log(results)
      //res.setHeader('token', 'jwt ' + results.token)
      res.status(200).send({
        results,
      })
    }
  })
})

module.exports = { registerRestaurant, authRestaurant }
