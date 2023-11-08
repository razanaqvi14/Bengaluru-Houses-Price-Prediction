const location_url = "http://127.0.0.1:5000/get_location_names";

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

  console.log(location, total_sqft, bhk, bath);

  const prediction_url = "http://127.0.0.1:5000/predict_home_price";

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

  // const data = {
  //   total_sqft: total_sqft,
  //   location: location,
  //   bhk: bhk,
  //   bath: bath,
  // };

  //   fetch(prediction_url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Response from server:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
};

// const predictHomePrice = async (
//   total_sqft,
//   location,
//   bhk,
//   bath,
//   prediction_url,
//   data
// ) => {
//   const response = await fetch(prediction_url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   const result = await response.json();
//   console.log(result);
// };

//   predictHomePrice(total_sqft, location, bhk, bath, prediction_url, data);
