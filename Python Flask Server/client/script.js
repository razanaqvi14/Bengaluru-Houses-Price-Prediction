const onPageLoad = async () => {
    console.log("Document Loaded");
    const url = "http://127.0.0.1:5000/get_location_names";

    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log("got response for get_location_names request");

        if (data) {
            const locations = data.locations;
            const uilocations = document.getElementById("uilocations");
            uilocations.innerHTML = "";

            for (const location of locations) {
                const opt = new Option(location);
                uilocations.appendChild(opt);
            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

window.onload = onPageLoad;
