document.getElementById('top-players').addEventListener('click', function (event) {
    const playerName = event.target.parentNode.querySelector('.card-title').innerText;
    const listContainer = document.getElementById('list-container');

    if (listContainer.children.length >= 5) {
        alert('You have already selected 5 player');
        return;
    }
    else {

        // console.log(listContainer.childNodes[0]);
        // else if(listContainer.childNodes)
        const li = document.createElement('li');
        li.innerText = playerName;
        event.target.parentNode.querySelector('.btn-select').disabled = true;
        listContainer.appendChild(li);
    }
});

function getInputValueById(elementId) {
    const inputElement = document.getElementById(elementId);
    const inputAmountString = inputElement.value;
    inputElement.value = '';
    if (isNaN(inputAmountString) || inputAmountString === '') {
        alert('Please give a number');
    }
    const inputAmount = parseFloat(inputAmountString);
    return inputAmount;
}

function getTextAmountById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textAmount = parseFloat(textElementString);
    return textAmount;
}

// calculate button
// ------------------------------------------------------------------
document.getElementById('btn-calculate').addEventListener('click', function () {
    const listSelected = (document.getElementById('list-container')).children.length;
    const perPlayerPrice = getInputValueById('per-player');
    const playerExpensesElement = document.getElementById('player-expenses');

    const TotalPlayerCost = listSelected * perPlayerPrice;
    playerExpensesElement.innerText = TotalPlayerCost;
});

// calculate Total button
// ------------------------------------------------------------------
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playerExpensesCost = getTextAmountById('player-expenses');
    const managerCost = getInputValueById('per-manager');
    const coachCost = getInputValueById('per-coach');

    const calculateTotalCost = playerExpensesCost + managerCost + coachCost;

    const calculateTotalCostElement = document.getElementById('calculat-total-cost');
    calculateTotalCostElement.innerText = calculateTotalCost;
});