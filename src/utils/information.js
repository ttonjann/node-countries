const request = require("postman-request")


// Haalt de benodigde informatie van de API
const information = (country, callback) => {
    const url = "https://restcountries.eu/rest/v2/name/" + encodeURIComponent(country)
    request({url, json: true}, (error, {body}) => {
            if (error) {
                callback("You must provide country", undefined)
            } else if (body.status) {
                callback("You must provide country", undefined)
            } else {callback(undefined, {
                name: body[0].name,
                language: body[0].languages[0].name,
                population: body[0].population,
                currency: body[0].currencies[0].name,  
            })
        }
        
        
    
    }) 

}


module.exports = information
