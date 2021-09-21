const path = require("path")
const express = require("express")
const information = require("./utils/information")



const app = express()

// Link naar de statische bestanden
const publicDirectoryPath = path.join(__dirname, "../public")

// Zorgt dat de bestanden worden gebruikt
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
    res.send()
})

// De pagina die het zoekresultaat weergeeft
app.get("/result", (req, res) => {
    if (!req.query.country) {
        return res.send({
            error: "You must provide country"
        })
    }

    information(req.query.country, (error, countryInformation) => {
        if (error) {
            return res.send({error})
        }
        res.send({
            name: countryInformation.name,
            language: countryInformation.language,
            population: countryInformation.population,
            currency: countryInformation.currency
        })
    })
})


// Start de server
app.listen(3000, () => {
    console.log("Server is up on port 3000.")
})