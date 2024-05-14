const express = require('express')
const router = express.Router()

const {
    getAllSearchedLocations,
    addLocation,
    deleteLocationById
} = require('../controller/weatherController')


router.get('/', (req, res, next)=>{
    res.json({
        test: true
    })
})

router.get('/get-all-searched-locations', getAllSearchedLocations)

router.post('/add-location', addLocation)

router.delete('/delete-location-by-id/:id', deleteLocationById)



module.exports = router