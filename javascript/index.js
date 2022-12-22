function updateDateTime() {
  // LOS ANGELES

  losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    losAngelesDateElement = losAngelesElement.querySelector(".date");
    losAngelesTimeElement = losAngelesElement.querySelector(".time");

    losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // SYDNEY

  sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    sydneyDateElement = sydneyElement.querySelector(".date");
    sydneyTimeElement = sydneyElement.querySelector(".time");

    sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // PARIS

  parisElement = document.querySelector("#paris");
  if (parisElement) {
    parisDateElement = parisElement.querySelector(".date");
    parisTimeElement = parisElement.querySelector(".time");

    parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

// CHANGE CITY FROM DROPDOWN

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        
         </div>
         <a href="/">Back to cities list</a>`;
}

updateDateTime();
setInterval(updateDateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
