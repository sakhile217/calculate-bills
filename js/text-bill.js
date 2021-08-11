
const billTypeTextElement = document.querySelector(".billTypeText");	
const addToBillBtnElement = document.querySelector(".addToBillBtn");	
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");	
const totalOneElement = document.querySelector(".totalOne");




function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElement.value.trim();
    // update the correct total
    var callsTotal = 0;
    var smsTotal = 0;
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalOneElement.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalOneElement.innerHTML = totalCost.toFixed(2);

      
}


addToBillBtnElement.addEventListener('click', textBillTotal)




