// handle deposit button 

// share function 
function innuptAmount(inputId) {
    const InputField = document.getElementById(inputId);
    const inputAmountText = InputField.value;
    const NewAmount = parseFloat(inputAmountText);
    // clear input 
    InputField.value = '';
    return NewAmount;

}

function innerTextUpdate(inputTextID, amount) {
    const currentAmont = document.getElementById(inputTextID);
    const priviousAmountText = currentAmont.innerText;
    const priviousAmount = parseFloat(priviousAmountText);
    const totalAmount = priviousAmount + amount;
    currentAmont.innerText = totalAmount;

}

function getCurrentBalance() {
    const balance = document.getElementById('balance-total');
    const balanceTotalText = balance.innerText;
    const balanceTotal = parseFloat(balanceTotalText);
    return balanceTotal;
}

function getTotalBalance(amount, ifAdd) {
    const balance = document.getElementById('balance-total');
    const balanceTotal = getCurrentBalance();

    if (ifAdd == true) {
        const newTotalBalance = balanceTotal + amount;
        balance.innerText = newTotalBalance;
    } else {
        const newTotalBalance = balanceTotal - amount;
        balance.innerText = newTotalBalance;
    }
}


function getClicked(e) {
    const NewDepositAmount = innuptAmount('deposit-amount');
    if (NewDepositAmount > 0) {
        //new deposit total update
        innerTextUpdate('deposit-current', NewDepositAmount);
        // balance update 
        getTotalBalance(NewDepositAmount, true)
    } else {
        alert("Please enter a positive amount, Nagitive Value Can't Count")
    }

}

// handle withdraw  button 
function withdraw(e) {
    const widthdrawAmount = innuptAmount('withdraw-amount');
    const currentBanalce = getCurrentBalance();

    const getequal = widthdrawAmount - currentBanalce; // check cureent vs withdraw amount for alert msg 


    if (widthdrawAmount > 0 && widthdrawAmount < currentBanalce) {
        //new withdraw total update
        innerTextUpdate('withdraw-current', widthdrawAmount);
        // Total Balance Update  
        getTotalBalance(widthdrawAmount, false)
    } else if (widthdrawAmount > currentBanalce) {
        alert(`You can't withdraw more than your current Balance ,Thanks. Please Deposit More =  ${getequal} $`)
    } else {
        alert("Please enter a positive amount, Nagitive Value Can't Count")
    }
}