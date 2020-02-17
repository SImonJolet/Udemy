const reasonInput= document.getElementById('input-reason');
const amountInput= document.getElementById('input-amount');

const cancelBtn= document.getElementById('btn-cancel');
const addBtn= document.getElementById('btn-add');

const depenseList = document.getElementById('depense-list');

const totalOutput = document.getElementById('total');

let total= 0

const clear = () => {
    reasonInput.value='';
    amountInput.value='';
}

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
    const newItem= document.createElement('ion-item');
    newItem.textContent= enteredReason + ': €' + enteredAmount;

    depenseList.appendChild(newItem);


    total += +enteredAmount;
    totalOutput.textContent=total;
    clear();
});

cancelBtn.addEventListener('click', clear());


