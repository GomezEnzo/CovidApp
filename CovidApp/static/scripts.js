const countrySelect = document.getElementById('countrySelect')
const newCases = document.getElementById('nuevos')
const criticCases = document.getElementById('criticos')
const activeCases = document.getElementById('activos')
const recoveryCases = document.getElementById('recuperados')
const totalCases = document.getElementById('total')
const getCountry = document.getElementById('rastrear')
const actualCountry = document.getElementById('localizatedCountry')

fetch("https://covid-193.p.rapidapi.com/countries", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4c7042344dmsh4a7ba2e9ebcf369p1e6dc1jsn191ec203ec9b",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json()) //json() convierte a JS
    .then(res => {
        for(i in res.response){
            option = document.createElement('option')
            option.textContent = res.response[i]
            countrySelect.appendChild(option)
            //console.log(res.provincias[i].nombre)
        }
    })

countrySelect.addEventListener('change', () => {
    const country = countrySelect.value
    getCountryInfo(country)
})

getCountry.addEventListener('click', ()=>{
    if('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(function(position){
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            fetch(`https://geocodeapi.p.rapidapi.com/GetTimezone?latitude=${latitude}&longitude=${longitude}`, {
	    "method": "GET",
	    "headers": {
		"x-rapidapi-key": "4c7042344dmsh4a7ba2e9ebcf369p1e6dc1jsn191ec203ec9b",
		"x-rapidapi-host": "geocodeapi.p.rapidapi.com"
	}
})
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json()) //json() convierte a JS
    .then(res => {
        countrySelect.value = res.Country
        getCountryInfo(res.Country)
    })
        })
    }
    else alert('Lo iento, no pudimos encontrar tu pais')
})

const getCovidData = res => {
        newCases.value += res.response[1].cases.new
        criticCases.value += res.response[1].cases.critical
        recoveryCases.value += res.response[1].cases.recovered
        activeCases.value += res.response[1].cases.active
        totalCases.value += res.response[1].cases.total
}

const getCountryInfo = country => {
    fetch(`https://covid-193.p.rapidapi.com/history?country=${country}&day=2020-06-02`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "4c7042344dmsh4a7ba2e9ebcf369p1e6dc1jsn191ec203ec9b",
		"x-rapidapi-host": "covid-193.p.rapidapi.com"
	}
})
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json()) //json() convierte a JS
    .then(res => {
        getCovidData(res)
    })
}