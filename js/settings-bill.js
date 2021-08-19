 var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSettings = document.querySelector(".smsCostSetting");
var warningLevelSettings = document.querySelector(".warningLevelSetting");
var criticalLevelSettings = document.querySelector(".criticalLevelSetting");

const callTotalSetting = document.querySelector(".callTotalSettings");
const smsTotalSetting = document.querySelector(".smsTotalSettings");
const totalSettings = document.querySelector(".totalSettings");
const totalAmountBtn = document.querySelector(".totalAmountBtn");
const updateSetting = document.querySelector(".button-primary.updateSettings");


var callTotalTwo = 0;
var smsTotalTwo = 0;


function Buttons(event){

    if (event.target.className === "billItemTypeWithSettings"){
    callTotalTwo++;
    totalAmountBtn.innerHTML = callTotalTwo;
}
 else if (event.target.className === "billItemTypeWithSettings"){
smsTotalTwo++;

}
totalAmountBtn.innerHTML = smsTotalTwo;
 }

totalAmountBtn.addEventListener("click", Buttons)
