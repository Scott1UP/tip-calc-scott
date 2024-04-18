const billAmount = document.querySelector("#billField");
const tipAmountGroup = document.querySelector(".tip-amount-group");
const numberOfPeople = document.querySelector("#peopleField");

const tipAmountToDisplay = document.querySelector("#tipAmountPerPerson");
const totalToDisplay = document.querySelector("#total");
const resetBtn = document.querySelector("#reset");

numberOfPeople.addEventListener("blur", event => {
    tipAmountToDisplay.textContent = `$${(billAmount.value / numberOfPeople.value)}`;
});

numberOfPeople.addEventListener("blur", event => {
    tipAmountToDisplay.textContent = `$${(billAmount.value / numberOfPeople.value)}`;
});

resetBtn.addEventListener("click", event => {
    billAmount.value = "";
    numberOfPeople.value = "";
    tipAmountToDisplay.textContent = "$0.00"
    totalToDisplay.textContent = "$0.00"
});