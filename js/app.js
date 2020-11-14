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
// 3. Use this function to update the filters. 
function updateFilters() {
  let elementValue = d3.select("#datetime").property("value");
  console.log(elementValue);

  let cityValue = d3.select("#city").property("value");
  console.log(cityValue);

  let stateValue = d3.select("#state").property("value");
  console.log(stateValue);

  let countryValue = d3.select("#country").property("value");
  console.log(countryValue);

  let shapeValue = d3.select("#shape").property("value");
  console.log(shapeValue);

// 8. Set the filtered data to the tableData.
  let filteredTable = tableData;
// 9. Loop through all of the filters and keep any data that
// matches the filter values

if (elementValue) {
  filteredTable= filteredTable.filter(row => row.datetime === elementValue);
}

if (cityValue) {
  filteredTable= filteredTable.filter(row => row.city === cityValue);
}

if (stateValue) {
    filteredTable= filteredTable.filter(row => row.state === stateValue);
}

if (countryValue) {
  filteredTable = filteredTable.filter(row => row.state === countryValue);
}

if (shapeValue) {
  filteredTable = filteredTable.filter(row => row.shape ===shapeValue);
}

buildTable(filteredTable);
}





// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);




// Build the table when the page loads
buildTable(tableData);