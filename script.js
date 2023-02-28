// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

// var API_key = '0461ed99b02271ca0a2359e53c28ef6f'

async function urlshort(url){
    v = fetch(url)
    var data1 = await v
    var data2 = data1.json()
    var data3 = await data2
    return data3
    }
    

async function api(){
out11 = await urlshort("https://restcountries.com/v3.1/all")
var parent = document.querySelector(".weather_data")
for(let i of out11){
 try{
    
//console.log(i)

var data_container = document.createElement("div")

lat = i.latlng[0]
lng = i.latlng[1]
data_container.setAttribute('lat',lat)
data_container.setAttribute('lng',lng)
console.log(i.latlng)


data_container.classList.add("container_data")
data_container.style.display = "inline-block"
// name
var country_name  = document.createElement("p")
country_name.innerText = i.name.common
console.log(i.name.common)
data_container.append(country_name)

// flag
var country_flag  = document.createElement("img")
country_flag.setAttribute("src", i.flags.png)
country_flag.innerText = i.flags.png
console.log(i.flags.png)
data_container.append(country_flag)

// capital
var country_capital  = document.createElement("p")
country_capital.innerText = i.capital[0]
console.log(i.capital[0])
data_container.append(country_capital)

// region
var country_region = document.createElement("p")
country_region.innerText = i.region
console.log(i.region)
data_container.append(country_region)

// country code
var country_code = document.createElement("p")
country_code.innerText = i.cca3
console.log(i.cca3)
data_container.append(country_code)

// click for weather

var button_weather = document.createElement("button")
button_weather.setAttribute('onclick','weatherapi(this)')
button_weather.setAttribute('data-bs-toggle','modal')
button_weather.setAttribute('data-bs-target','#exampleModal')
button_weather.setAttribute('type','button')
// button_weather.classList.add('btn btn-primary')
button_weather.innerText = "Click for Weather"
data_container.append(button_weather)



parent.append(data_container)



// var data_container2 = document.createElement("div")


}catch{
}
}

}

api()



 async function weatherapi(e){
    console.log(e)
    console.log(e.parentElement)
    var list = document.querySelector('#exampleModal .modal-body')

    var parent = e.parentElement
    var lat = parent.getAttribute('lat')
    var lon = parent.getAttribute('lng')
    console.log("weather Executed")
     var API_key = '0461ed99b02271ca0a2359e53c28ef6f'
     var weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`


   out11 = await urlshort(weather_url)
   list.innerHTML = `<p>Main : ${out11.weather[0].main}</p>
   <p>Description : ${out11.weather[0].description}</p>
   <p>Humidity : ${out11.main.humidity}</p>
   <p>Temp : ${out11.main.temp}</p>
   <p>Pressure : ${out11.main.pressure}</p>
   <p>Visibility : ${out11.visibility}</p>`
//    list.innerHTML = out11.weather[0].description
   console.log(out11.weather[0])
    
 }
//  weatherapi()

 // var parent = document.querySelector(".display_data")
    // console.log(out11.coord)
    // console.log(out11.main.humidity)
    // console.log(out11.main.temp)
    // console.log(out11.main.pressure)
    // console.log(out11.visibility)





    // console.log("weather Executed")
    // var API_key = '0461ed99b02271ca0a2359e53c28ef6f'
    // var weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
 
// //     console.log(out11[0].latlng)
// //     lat = out11[0].latlng[0]
// //     lon = out11[0].latlng[1]
// //     url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}`
// //     v1 = fetch(url)
// //     out11 = await v1
// //     prom1 = out11.json()
// //     out12 = await prom1
// //     console.log(out12)
// //     }

// //  weatherapi() 