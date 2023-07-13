
function update(){
   let bill = Number(document.getElementById('yourBill').value);
   let tipPercentage = document.getElementById('tipInput').value;
   let split = document.getElementById('splitInput').value;
   //Calculate
   let tipValue = bill * (tipPercentage/100);
   let billTotal = bill + tipValue;
   //Bill for each person
   let billEach = billTotal / split;
   
   //Values showed on screen
   document.getElementById('tipPercent').innerHTML = tipPercentage + '%';
   document.getElementById('tipValue').innerHTML = tipValue + '€';
   document.getElementById('totalWithTip').innerHTML = billTotal + '€';
   document.getElementById('splitValue').innerHTML = split;
   document.getElementById('billEach').innerHTML = billEach + '€';
   
}