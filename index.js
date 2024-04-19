const billAmount = document.querySelector("#billField");
const numberOfPeople = document.querySelector("#peopleField");

const tipAmountPerPerson = document.querySelector("#tipAmountPerPerson");
const totalPerPerson = document.querySelector("#total");

const tipButtons = document.querySelectorAll(".tip-btn");
const resetBtn = document.querySelector("#reset");

let activeTipValue = 0;
let tipAmount = 0;

tipButtons.forEach(button => {
  button.addEventListener("click", event => {

    // Remove the 'active' class from all buttons
    tipButtons.forEach(btn => btn.classList.remove("active"));

    // Add the 'active' class to the clicked button
    event.target.classList.add("active");

    // Store the value of the active button without the "%" symbol
    activeTipValue = event.target.value.replace("%", "");

    // Store the tipAmount
    tipAmount = billAmount.value / activeTipValue;

    // Transform the active tip value to a usable multiplier
    activeTipValue = activeTipValue / 100 + 1;

    // Log the tip-related values to console to check
    console.log(activeTipValue);
    console.log(tipAmount);
  });
});


numberOfPeople.addEventListener("blur", event => {
    totalPerPerson.textContent = `$${(billAmount.value * activeTipValue / numberOfPeople.value).toFixed(2)}`;
    tipAmountPerPerson.textContent = `$${(tipAmount / numberOfPeople.value).toFixed(2)}`;
});

resetBtn.addEventListener("click", event => {
    billAmount.value = "";
    numberOfPeople.value = "";
    document.querySelector(".tip-btn.active").classList.remove("active");
    tipAmountPerPerson.textContent = "$0.00";
    totalPerPerson.textContent = "$0.00";
});