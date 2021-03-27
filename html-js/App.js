// from data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// lake values for each column
tableData.forEach(function(lakeLevel) {
    console.log(lakeLevel);
    // Append one table row `tr` for each lake object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each Lake value
    Object.entries(lakeLevel).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");
    // Get the value property of the input date
    var inputValue = inputElement.property("value");
    // console.log input value
    console.log(inputValue);
    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(level => level.datetime === inputValue);
    // console.log filter values
    console.log(filteredData);


    filteredData.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each lake object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each lake value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

function sortTableByColumn(table, column, asc = true) {
  const dirModifier = asc ? 1 : -1;
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.querySelectorAll("tr"));

  const sortedRows = rows.sort((a,b) => {
   const aColText = a.querySelector('td:nth-child(${column + 1})').textContent.trim();
   const bColText = b.querySelector('td:nth-child(${column + 1})').textContent.trim();

   return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
  });

  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }

  tBody.append(...sortedRows);

  table.querySelectorAll("th").forEach(th => th.classList.Remove("th-sort-asc", "th-sort-desc"));
  table.querySelector('th:nth-child(${column + 1})').classList.toggle("th-sort-asc", asc);
  table.querySelector('th:nth-child(${column + 1})').classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
  headerCell.addEventListener("click", () => {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");

    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
  });
});