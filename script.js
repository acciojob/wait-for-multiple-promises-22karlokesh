//your JS code here. If required.


// unknown
// Reference to the output tbody
// Reference to the output tbody
const output = document.getElementById("output");

// Initially show "Loading..." row
const loadingRow = document.createElement("tr");
loadingRow.setAttribute("id", "loading"); // Add this line
const loadingCell = document.createElement("td");
loadingCell.setAttribute("colspan", "2");
loadingCell.textContent = "Loading...";
loadingRow.appendChild(loadingCell);
output.appendChild(loadingRow);


// Function to create a promise that resolves after random delay (1 to 3 seconds)
function createTimedPromise(index) {
  const delay = Math.random() * 2 + 1; // random between 1 and 3
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: `Promise ${index}`, time: delay });
    }, delay * 1000); // convert to ms
  });
}

// Start time for total duration calculation
const startTime = performance.now();

// Create three promises
const promises = [
  createTimedPromise(1),
  createTimedPromise(2),
  createTimedPromise(3)
];

// Wait for all promises to resolve
Promise.all(promises).then((results) => {
  // End time for total duration
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // Remove "Loading..." row
  output.innerHTML = "";

  // Append each promise result as a new row
  results.forEach((result) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const timeCell = document.createElement("td");

    nameCell.textContent = result.name;
    timeCell.textContent = result.time.toFixed(3);

    row.appendChild(nameCell);
    row.appendChild(timeCell);
    output.appendChild(row);
  });

  // Add total time row
  const totalRow = document.createElement("tr");
  const totalLabelCell = document.createElement("td");
  const totalTimeCell = document.createElement("td");

  totalLabelCell.textContent = "Total";
  totalTimeCell.textContent = totalTime;

  totalRow.appendChild(totalLabelCell);
  totalRow.appendChild(totalTimeCell);
  output.appendChild(totalRow);
});
