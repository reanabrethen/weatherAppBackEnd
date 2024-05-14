const Weather = require("../model/Weather")

async function getAllSearchedLocations(req, res, next){
    try {
        let foundAllLocations = await Weather.find({})
        res.json({message: "Success", payload: foundAllLocations})
    } catch (error) {
        res.status(500).json({message: 'error', error : error.message})
    }
}

async function addLocation(req, res, next){
    const {location, country, description, temperature, icon} = req.body
    try {
        const newLocation = new Weather ({
            location,
            country,
            description,
            temperature,
            icon
            })
        await newLocation.save()
        res.json({message: "Successfully created user", payload: newLocation})
    } catch (error) {
        res.status(500).json({message: 'Location does not exsist.', error: error.message})
    }
}

async function deleteLocationById(req, res, next){
    try {
        let removedLocation = await Weather.findByIdAndDelete(req.params.id)
        res.json({message: "Successfully deleted location.", payload: removedLocation})
    } catch (error) {
        res.status(500).json({message: "Unable to delete location", error: error.message})
    }
}

module.exports = {getAllSearchedLocations, addLocation, deleteLocationById}