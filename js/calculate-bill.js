const billStringElement = document.querySelector(".billstring");
const calculateBtnElement = document.querySelector(".calculateBtn");
const billTotaltringElement = document.querySelector(".billTotal");

function calculateBtnClicked(Item){

const theCurrentColor = document.querySelector(".calculateBtn:checked");
alert(calculateBtn.value)
    const stringitems = Item.split(',');
    let total = 0;
    
    for (var i=0; i<stringitems.length; i++){
      const Item = stringitems[i].trim();
      
      if (Item === 'call'){
        total += 2.75;
      }
      else if (Item === 'sms'){
       total += 0.75;
      }
    }
      return 'R' + total.toFixed(2);

  }
  