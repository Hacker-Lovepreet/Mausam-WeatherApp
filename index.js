let lat
let long
let btnEl = document.getElementById("search-btn");
let tem = document.querySelector(".temp-degree")
let currLoc = document.querySelector(".current-loc")
let desc = document.querySelector("#description")
let name = document.getElementById("loc-name")
let celsius = document.getElementById("span")
let icon = document.querySelector(".icon")

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
}



btnEl.addEventListener("click", function () {
	let loc = document.getElementById("search-input");
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${loc.value}&APPID=de575ea504c7ba3384fd27db7c5fd855&units=metric`)
		.then(response => response.json())
		.then(data => {
			name.textContent = data.name
			// console.log(data)
			tem.textContent = data.main.temp
			celsius.innerHTML = "<span>&#8451</span>"
			desc.innerHTML = data.weather[0].description.capitalize()
			let x = data.weather[0].icon
			icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${x}@2x.png">`
			// console.log(x)
		})
		
})
currLoc.addEventListener("click", () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(pos => {
			lat = pos.coords.latitude
			long = pos.coords.longitude
			//console.log(lat)
			fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=de575ea504c7ba3384fd27db7c5fd855&units=metric`)
				.then(response => response.json())
				.then(data => {
					name.textContent = data.name
					console.log(data)
					tem.textContent = data.main.temp
					celsius.innerHTML = "<span>&#8451</span>"
					desc.innerHTML = data.weather[0].description.capitalize()
					let x = data.weather[0].icon
					icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${x}@2x.png">`
					console.log(x)
				})
		})

	}
})






