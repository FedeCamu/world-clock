function updateDateTime() {
  // LOS ANGELES

  losAngelesElement = document.querySelector("#los-angeles");
  losAngelesDateElement = losAngelesElement.querySelector(".date");
  losAngelesTimeElement = losAngelesElement.querySelector(".time");

  losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // SYDNEY

  sydneyElement = document.querySelector("#sydney");
  sydneyDateElement = sydneyElement.querySelector(".date");
  sydneyTimeElement = sydneyElement.querySelector(".time");

  sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateDateTime();
setInterval(updateDateTime, 1000);
