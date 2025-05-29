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
}
//Function to convert from to
function getConverter(from, to) {
      const conversions = {
      const input = document.getElementById("inputValues").value.trim();
      const type = document.getElementById("conversionType").value;
      const resultEl = document.getElementById("result");
}
 };
      return conversions[`${from}_${to}`];
}
