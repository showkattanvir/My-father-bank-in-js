// function doubleIt (num){
//     const result = num*2;
//     return result;
// }
// const fiveDuble = doubleIt (5);
// const sevenDuble = doubleIt (7);
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}
function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const priviousTotal = parseFloat(totalText);//ati text ka sonka ta ropan torito koraca//
    totalElement.innerText = priviousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}




document.getElementById("deposit-button").addEventListener('click', function () {
    // const depositInput = document.getElementById("deposit-input");
    // const depositAmountText = depositInput.value;//input tai acana value dici//
    // const depositAmount = parseFloat(depositAmountText);//ati text ka sonka ta ropan torito koraca//
    // const depositTotal = document.getElementById("deposit-total");
    // const depositTotalText = depositTotal.innerText;
    // const priviousDepositTotal = parseFloat(depositTotalText);//ati text ka sonka ta ropan torito koraca//
    // depositTotal.innerText = priviousDepositTotal + depositAmount;

    // update balance //
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    const depositAmount = getInputValue("deposit-input");
    if (depositAmount > 0) {
        updateTotalField("deposit-total", depositAmount);
        updateBalance(depositAmount, true);
    }


});
document.getElementById("withdraw-button").addEventListener("click", function () {
    // const withdrawInput = document.getElementById("withdraw-input");
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    // const withdrawTotal = document.getElementById("withdraw-total");
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdraw = parseFloat(withdrawTotalText);

    // withdrawTotal.innerText = previousWithdraw + withdrawAmount;

    // update balance //
    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    const withdrawAmount = getInputValue("withdraw-input")
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField("withdraw-total", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        console.log("You can not withdraw more then what you have in your account")
    }


});