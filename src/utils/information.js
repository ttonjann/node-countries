const request = require("postman-request")


// Haalt de benodigde informatie van de API
const information = (country, callback) => {
    const url = "http://api.countrylayer.com/v2/name/" + encodeURIComponent(country) + "?access_key=dd12ab865aba34edc1e71a5be1ff5c64"
    request({url, json: true}, (error, {body}) => {
            if (error) {
                callback("You must provide country", undefined)
            } else if (body.status) {
                callback("You must provide country", undefined)
            } else {callback(undefined, {
                name: body[0].name,
                capital: body[0].capital,
                region: body[0].region, 
            })
        }
        
        
    
    }) 

}


module.exports = information
