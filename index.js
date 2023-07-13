
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
   document.getElementById('tipValue').innerHTML = formatMoney(tipValue);
   document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal);
   document.getElementById('splitValue').innerHTML = formatSplit(split);
   document.getElementById('billEach').innerHTML = formatMoney(billEach);
   
}

function formatMoney(value){
   value = Math.ceil(value * 100)/100; //esta funçao garante que o valor da 2ª casa decimal é sempre arredondado para cima 
   value = value.toFixed(2); //fixa o valor em duas casas decimais
   return value + '€';
}

function formatSplit(value){
   if(value == 1){
      return value + ' person';
   }
   else{
      return value + ' people';
   }
}