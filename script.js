/**
 * Switches between tabs (Calculator / About)
 * @param {string} tabName - The ID of the tab to show
 */
function switchTab(tabName) {
  // Hide all tab content sections
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));

  // Remove active styles from all tab buttons
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('text-blue-600', 'font-semibold', 'border-b-2', 'border-blue-600');
  });

  // Show the selected tab content
  document.getElementById(tabName).classList.remove('hidden');

  // Highlight the active tab button
  const activeBtn = Array.from(document.querySelectorAll('.tab-button')).find(btn =>
    btn.textContent.toLowerCase().includes(tabName)
  );
  if (activeBtn) {
    activeBtn.classList.add('text-blue-600', 'font-semibold', 'border-b-2', 'border-blue-600');
  }
}


/**
 * Toggles between toMetric and toImperial conversion modes
 */

function toggleConversion(conversionType) {
  // Selects all 
  const toMetric = document.querySelectorAll(".toMetric");
  const toImperial = document.querySelectorAll(".toImperial");

  if (conversionType === "toMetric"){
    toMetric.forEach(item => item.classList.remove("hidden"))
    toImperial.forEach(item => item.classList.add("hidden"))
  }
  if (conversionType === "toImperial"){
    toMetric.forEach(item => item.classList.add("hidden"))
    toImperial.forEach(item => item.classList.remove("hidden"))

}



// converts pounds to kilograms
function poundsToKilograms(){
  let pounds = parseFloat(document.getElementById("poundsInput").value);
  let result = pounds * 0.45359237;
  document.getElementById('kilogramResult').textContent = result.toFixed(2);
}

// converts kilograms to pounds
function kilogramsToPounds(){
  let kilogram = parseFloat(document.getElementById("kilogramInput").value);
  let result = kilogram * 2.2;
  document.getElementById('poundsResult').textContent = result.toFixed(2);
}
// === Distance Conversion Functions ===
// converts Miles to kilometer
function milesToKilometers() {
  let input = document.querySelector("#distance .toMetric input").value;
  let miles = parseFloat(input);
  if (isNaN(miles)) {
    alert("Please enter a valid number for miles.");
    return;
  }
  let result = miles * 1.60934;
  document.getElementById("kilometersResult").textContent = result.toFixed(2);
}
//function kilometer to miles
function kilometersToMiles() {
  let input = document.querySelector("#distance .toImperial input").value;
  let kilometers = parseFloat(input);
  if (isNaN(kilometers)) {
    alert("Please enter a valid number for kilometers.");
    return;
  }
  let result = kilometers / 1.60934;
  document.getElementById("milesResult").textContent = result.toFixed(2);
}


