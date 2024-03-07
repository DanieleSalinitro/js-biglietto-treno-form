let elUserName = document.getElementById('username');
let elUserKm = parseInt(document.getElementById('userkm'));
let elRangeAge = document.getElementById('range-age');
let elButton = document.getElementById('btn-show');
let elButtonClear = document.getElementById('btn-clear');

let elname = document.querySelector('.ds-namepass');
let elticket = document.querySelector('.ds-ticket');
let elcarriage = parseInt(document.querySelector('.ds-carriage'));
let elCpCode = parseInt(document.querySelector('.ds-cpcode'));
let elprice = parseInt(document.querySelector('.ds-price'));

const priceKm = 0.21;
const discountJunior = 0.2;
const discountSenior = 0.4;
let price = elUserKm * priceKm;
let discount = 0;
let finalPrice;

elButton.addEventListener('click', function(){
    if (!isNaN(elUserKm)){
        if (elRangeAge.value = 'junior') {
            discount = price * discountJunior;
        } else if (elRangeAge.value = 'senior') {
            discount = price * discountSenior;
        } 
        finalPrice= price - discount;
        document.querySelector("ds-train-price").innerHTML = `${finalPrice.toFixed(2)} €`;
    } else{
        alert(`ERRORE - Inserire valori numerici`);
    }
})




// let elTesto = document.getElementById('testo');

// let elColore = document.getElementById('colore');

// let elForma = document.getElementById('forma');

// let elButton = document.querySelector('.btn.btn-success');

// // console.log(elTesto, elColore, elForma, elButton);

// let elBox = document.querySelector('.box');
// //console.log(elBox);


// elButton.addEventListener('click', function(){
//     // console.log('hai cliccato il bottone');
//     const testo = elTesto.value;   
//     const colore = elColore.value;
//     const forma = elForma.value;
//     console.log(testo, colore, forma);
//     const formaClass =  (forma === 'circle') ? 'rounded-circle' : '';
// //   'rounded-circle'
//     elBox.innerHTML = testo;
//     // elBox.className = '';
//     elBox.className = 'box '+ colore +' '+formaClass;
//     // elBox.classList.add(colore);
//     // elBox.classList.remove('d-none');
    
// });