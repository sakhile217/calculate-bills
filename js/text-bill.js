
const billTypeTextElement = document.querySelector(".billTypeText");	
const addToBillBtnElement = document.querySelector(".addToBillBtn");	
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");	
const totalOneElement = document.querySelector(".totalOne");

var callsTotal = 0;
    var smsTotal = 0;

function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeEntered = billTypeTextElement.value.trim();
    // update the correct total
    
    if (billTypeEntered === "call"){
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    else if (totalCost >= 50){
        // adding the danger class will make the text red
        totalOneElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalOneElement.classList.add("warning");
    } 


    //update the totals that is displayed on the screen.
    callTotalOneElement.innerHTML = callsTotal;
    smsTotalOneElement.innerHTML = smsTotal;
    var totalCost = callsTotal + smsTotal;
    totalOneElement.innerHTML = totalCost.toFixed(2);


      
}


addToBillBtnElement.addEventListener('click', textBillTotal)



