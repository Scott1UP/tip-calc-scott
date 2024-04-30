const billAmount = document.querySelector("#billField");
const numberOfPeople = document.querySelector("#peopleField");

const tipAmountPerPerson = document.querySelector("#tipAmountPerPerson");
const totalPerPerson = document.querySelector("#total");

const tipButtons = document.querySelectorAll(".tip-btn");
const resetBtn = document.querySelector("#reset");
const customTip = document.querySelector("#custom-tip")

let activeTipValue = 0;
let tipAmount = 0;

// Add the active states to the Tip buttons
tipButtons.forEach(button => {
  button.addEventListener("click", event => {

    // Remove the 'active' class from all buttons
    tipButtons.forEach(btn => btn.classList.remove("active"));

    // Remove the value from the custom input
    customTip.value = "";

    // Add the 'active' class to the clicked button
    event.target.classList.add("active");

    // Update the calculations
    updateCalculations();
  });
});

// Remove any active button states
customTip.addEventListener("click", event => {
  document.querySelector(".tip-btn.active").classList.remove("active");
});

// Reset all calculator values
resetBtn.addEventListener("click", event => {
    billAmount.value = "";
    numberOfPeople.value = "";
    customTip.value = "";
    document.querySelector(".tip-btn.active").classList.remove("active");
    document.querySelector(".error").classList.add("disabled");
    document.querySelector(".number-of-people .icon-input").classList.remove("error-input");
    tipAmountPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
});

// Function to check if all required fields have valid values
const checkValidity = () => {
  return billAmount.value.trim() !== "" && numberOfPeople.value.trim() !== "" && (customTip.value.trim() !== "" || document.querySelector(".tip-btn.active") !== null);
}

// Function to check if the number of people is not zero
const checkNotZero = () => {
  if (parseFloat(numberOfPeople.value) === 0) {
    document.querySelector(".error").classList.remove("disabled");
    document.querySelector(".number-of-people .icon-input").classList.add("error-input");
    return false;
  } 
  else {
    document.querySelector(".error").classList.add("disabled");
    document.querySelector(".number-of-people .icon-input").classList.remove("error-input");
    return true;
  }
}

// Function to update calculations
const updateCalculations = () => {
  if (checkValidity() && checkNotZero()) {

    // Reset error and input style when number of people is valid
    document.querySelector(".error").classList.add("disabled");
    document.querySelector(".number-of-people .icon-input").classList.remove("error-input");

    let tipPercentage;
    const activeTipButton = document.querySelector(".tip-btn.active");
    
    if (activeTipButton) {
      tipPercentage = parseFloat(activeTipButton.value) / 100;
    } 
    else if (customTip.value.trim() !== "") {
      tipPercentage = parseFloat(customTip.value) / 100;
    }

    let totalTipAmount = billAmount.value * tipPercentage;
    let totalTipPerPerson = totalTipAmount / numberOfPeople.value;
    let totalPerPersonAmount = (parseFloat(billAmount.value) + totalTipAmount) / parseFloat(numberOfPeople.value);

    tipAmountPerPerson.textContent = `$${totalTipPerPerson.toFixed(2)}`;
    totalPerPerson.textContent = `$${totalPerPersonAmount.toFixed(2)}`;
  };
}

// Event listeners for input fields
billAmount.addEventListener("input", updateCalculations);
numberOfPeople.addEventListener("input", updateCalculations);
customTip.addEventListener("input", updateCalculations);

// Initial calculation
updateCalculations();