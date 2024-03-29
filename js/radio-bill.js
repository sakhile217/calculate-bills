const billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");	
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");	
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");	
const totalCostElem = document.querySelector(".totalTwo");


var callsTotal = 0;
var smsTotal = 0;

function radioBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billItemTypeRadioElement.value.trim();
    // update the correct total
   
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
    totalCostElem.innerHTML = totalCost.toFixed(2);


var billTypeEntered = document.querySelector("input[name='billItemTypeRadio']:checked");
if (billTypeEntered){
    billItemTypeRadioElement.innerHTML = billTypeEntered.value
    // billItemType will be 'call' or 'sms'
}

else if (totalCost >= 50){
    // adding the danger class will make the text red
    totalCostElem.classList.add("danger");
}
else if (totalCost >= 30){
    totalCostElem.classList.add("warning");
} 

}


radioBillAddBtnElement.addEventListener('click', radioBillTotal);
