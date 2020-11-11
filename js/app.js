// from data.js
const tableData = data;
var filteredTable = [];
// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}
buildTable(tableData);
// 1. Create a variable to keep track of all the filters as an object.
var filterlist = document.getElementsByTagName("input");
var filters = {}
    // 3. Use this function to update the filters.
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changetheElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    let elementValue = changetheElement.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    let filterId = changetheElement.attr("id");

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
        filters[filterId] = elementValue;
    } else {
        delete filters[filterId];
    }

    // 6. Call function to apply all filters and rebuild the table
    filterTable();

}
// 7. Use this function to filter the table when data is entered.
  function filterTable() {
    var states = d3.select("#state").property("value");
    var cities = d3.select("#city1").property("value");
    //var countries = d3.select("#country").property("value");
    //var shapes = d3.select("#shape1").property("value");
    // 8. Set the filtered data to the tableData.
    
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    filteredTable = tableData;

    if (states != "") {

        filteredTable = filteredTable.filter(d => d.state === states)
    }
    if (cities != "") {
        filteredTable = filteredTable.filter(d => d.city === cities);
    }
    if (countries != "") {
        filteredTable = filteredTable.filter(d => d.country === countries);
    }
    if (shapes != "") {
        filteredTable = filteredTable.filter(d => d.shape === shapes);
    }
    return filteredTable;
}

buildTable(filteredTable);


// 2. Attach an event to listen for changes to each filter
d3.select("#state").on("change", filterTable);
d3.select("#city1").on("change", filterTable);


// Build the table when the page loads
buildTable(tableData);