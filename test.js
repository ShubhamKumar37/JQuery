// Global array to store fetched person data
var personsData = [];

// Returns formatted address string for a person
function getAddressString(person) {
    return "Door No: " + person.doorNo + ", " + person.streetName + ", (LandMark: " + person.landMark + "), " +
        person.city + ", " + person.state + " " + person.zipCode + "<br>" + person.country;
}

// Returns matching donors based on city and blood group
function getBloodDonorsDetails(city, bloodGroup) {
    var donorList = [];

    for (var i = 0; i < personsData.length; i++) {
        var person = personsData[i];
        if (
            person.city.toLowerCase() === city.toLowerCase() &&
            person.bloodGroup.toLowerCase() === bloodGroup.toLowerCase()
        ) {
            donorList.push({
                name: person.firstName + " " + person.lastName,
                phoneNumber: person.phoneNumber,
                address: getAddressString(person)
            });
        }
    }

    return donorList;
}

// Returns formatted HTML string for donors table or "no donors" message
function displayBloodDonorDetails(donorDetails) {
    if (donorDetails.length === 0) {
        return "No matching blood donors found for the given city and blood group.";
    }

    var table = "<table>";
    table += "<tr><th>SI.No</th><th>Name</th><th>Contact Number</th><th>Address</th></tr>";

    for (var i = 0; i < donorDetails.length; i++) {
        table += "<tr>";
        table += "<td>" + (i + 1) + "</td>";
        table += "<td>" + donorDetails[i].name + "</td>";
        table += "<td>" + donorDetails[i].phoneNumber + "</td>";
        table += "<td>" + donorDetails[i].address + "</td>";
        table += "</tr>";
    }

    table += "</table>";
    return table;
}

// Fetch data from API and store globally
$("#btn").click(function () {
    $.ajax({
        url: "https://webapps.tekstac.com:8443/WebProjects/PersonService/viewPersonListJSON",
        method: "GET",
        success: function (response) {
            if (response.length > 0) {
                personsData = response;
                $("#msg").text("Retrieval of data was successful");
            } else {
                $("#msg").text("No data found");
            }
        },
        error: function () {
            $("#msg").text("Error fetching data");
        }
    });
});

// Handle donor search and result display
$("#search").click(function () {
    var city = $("#city").val().trim();
    var bloodGroup = $("#bloodGroup").val().trim();

    var donorResults = getBloodDonorsDetails(city, bloodGroup);
    var finalOutput = displayBloodDonorDetails(donorResults);

    $("#result").html(finalOutput);
});