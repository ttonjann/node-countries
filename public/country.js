const countryForm = document.querySelector("form")
const search = document.querySelector("input")
const country = document.querySelector("#country")
const language = document.querySelector("#language")
const population = document.querySelector("#population")
const currency = document.querySelector("#currency")

// Maakt het mogelijk om via de input een zoekactie te maken
countryForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const location = search.value

    country.textContent = "Loading..."
    language.textContent = ""
    population.textContent = ""
    currency.textContent = ""


    fetch("http://localhost:3000/result?country=" + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                country.textContent = data.error
            } else{
                country.textContent = "Country: " + data.name
                language.textContent = "Language: " + data.language
                population.textContent = "Population: " + data.population
                currency.textContent = "Currency: " + data.currency
            }
        })
    })
})
