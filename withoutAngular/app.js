const reasonInput= document.getElementById('input-reason');
const amountInput= document.getElementById('input-amount');

const cancelBtn= document.getElementById('btn-cancel');
const addBtn= document.getElementById('btn-add');

addBtn.addEventListener('click', () => {
   const enteredReason = reasonInput.value;
   const enteredAmount = amountInput.value;
  if(
      enteredReason.trim().lenght <=0 || 
      enteredAmount <=0 || 
      enteredAmount.trim().lenght <=0
    ){
        //Si valeur vide: on arrete le fonctionnement 
       return;
    }
    console.log("Dépense: ",enteredReason);
    console.log("Montant: ", enteredAmount);
    
    
});

