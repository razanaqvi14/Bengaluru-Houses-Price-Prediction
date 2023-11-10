// const location_url = "http://127.0.0.1:5000/get_location_names";
const location_url = "/api/get_location_names";

const get_location_names = async () => {
  response = await fetch(location_url);
  data = await response.json();

  const array_of_locations = data.locations;

  const list_of_locations = document.getElementById("uiLocations");

  array_of_locations.forEach((location) => {
    const option = document.createElement("option");
    option.text = location;
    option.value = location;
    list_of_locations.appendChild(option);
  });
};

get_location_names();

const predict_price = () => {
  const location = document.getElementById("uiLocations").value;
  const total_sqft = document.getElementById("uiSqft").value;
  const bhk = document.querySelector('input[name="uiBHK"]:checked').value;
  const bath = document.querySelector(
    'input[name="uiBathrooms"]:checked'
  ).value;
  const estPrice = document.getElementById("uiEstimatedPrice");

  // const prediction_url = "http://127.0.0.1:5000/predict_home_price";
  const prediction_url = "/api/predict_home_price";

  $.post(
    prediction_url,
    {
      total_sqft: total_sqft,
      bhk: bhk,
      bath: bath,
      location: location,
    },
    function (data, status) {
      console.log(data.estimated_price);
      estPrice.innerHTML =
        "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      console.log(status);
    }
  );
};
