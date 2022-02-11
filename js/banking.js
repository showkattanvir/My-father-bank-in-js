// function doubleIt (num){
//     const result = num*2;
//     return result;
// }
// const fiveDuble = doubleIt (5);
// const sevenDuble = doubleIt (7);
function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    depositInput.value = '';
    return depositAmount;
}




document.getElementById("deposit-button").addEventListener('click', function () {
    // const depositInput = document.getElementById("deposit-input");
    // const depositAmountText = depositInput.value;//input tai acana value dici//
    // const depositAmount = parseFloat(depositAmountText);//ati text ka sonka ta ropan torito koraca//
    const depositAmount = getInputValue("deposit-input");
    const depositTotal = document.getElementById("deposit-total");
    const depositTotalText = depositTotal.innerText;
    const priviousDepositTotal = parseFloat(depositTotalText);//ati text ka sonka ta ropan torito koraca//
    depositTotal.innerText = priviousDepositTotal + depositAmount;
    // update balance //
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});
document.getElementById("withdraw-button").addEventListener("click", function () {
    // const withdrawInput = document.getElementById("withdraw-input");
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue("withdraw-input")
    const withdrawTotal = document.getElementById("withdraw-total");
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = previousWithdraw + withdrawAmount;
    // update balance //
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    //Clear the the sectio //
    // withdrawInput.value = '';

});