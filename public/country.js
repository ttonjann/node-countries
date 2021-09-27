const countryForm = document.querySelector("form")
const search = document.querySelector("input")
const country = document.querySelector("#country")
const capital = document.querySelector("#capital")
const region = document.querySelector("#region")

// Maakt het mogelijk om via de input een zoekactie te maken
countryForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const location = search.value

    country.textContent = "Loading..."
    capital.textContent = ""
    region.textContent = ""

    fetch("/result?country=" + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                country.textContent = data.error
            } else{
                country.textContent = "Country: " + data.name
                capital.textContent = "Capital: " + data.capital
                region.textContent = "Region: " + data.region
            }
        })
    })
})

