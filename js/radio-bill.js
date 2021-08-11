
const billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");	
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");	
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");	
const totalTwoElement = document.querySelector(".totalTwo");







function radioBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billItemTypeRadioElement.value.trim();
    // update the correct total
    var callsTotal = 0;
    var smsTotal = 0;
    if (billTypeEntered === "call"){
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalTwoElement.innerHTML = totalCost.toFixed(2);


var radioBillAddBtnElement = document.querySelector("input[name='billItemType']:checked");
if (radioBillAddBtnElement){
    var billItemType = radioBillAddBtnElement.value
    // billItemType will be 'call' or 'sms'
}
}
radioBillAddBtnElement.addEventListener('click', radioBillTotal);
