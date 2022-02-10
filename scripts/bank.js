// handle deposit button 
document.getElementById('deposit-button').addEventListener('click', function () {


    const depositInput = document.getElementById('deposit-amount');
    const NewDepositAmountText = depositInput.value;
    const NewDepositAmount = parseFloat(NewDepositAmountText);
    // console.log(depositAmount);

    //new deposit total update
    const depositCurrent = document.getElementById('deposit-current');
    const priviousDepositAmountText = depositCurrent.innerText;
    const priviousDepositAmount = parseFloat(priviousDepositAmountText);
    const totalDepositAmount = priviousDepositAmount + NewDepositAmount;
    depositCurrent.innerText = totalDepositAmount;

    // balance update 
    const balance = document.getElementById('balance-total');
    const balanceTotalText = balance.innerText;
    const balanceTotal = parseFloat(balanceTotalText);
    const newTotalBalance = balanceTotal + NewDepositAmount;
    balance.innerText = newTotalBalance;

    // clear input 
    depositInput.value = '';
})

// handle withdraw  button 
document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawinputText = withdrawInput.value;
    const widthdrawAmount = parseFloat(withdrawinputText);



})