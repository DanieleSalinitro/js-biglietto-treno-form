let elUserName = document.getElementById('username');
let elUserKm = document.getElementById('userkm');
let elRangeAge = document.getElementById('range-age');
let elButton = document.getElementById('btn-show');
let elButtonClear = document.getElementById('btn-clear');
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
elButton.addEventListener('click', function(){
    userKm = parseInt(elUserKm.value);
    userName = elUserName.value;
    rangeAge = elRangeAge.value;
    console.log(userKm, rangeAge);
    const priceKm = 0.21;
    const discountJunior = 0.2;
    const discountSenior = 0.4;
    let price = userKm * priceKm;
    let discount = 0;
    let finalPrice;
    if (!isNaN(userKm)){
        if (rangeAge == 'junior') {
            discount = price * discountJunior;
            document.querySelector(".ds-ticket").innerHTML = `Biglietto FrecciaYoung` ;

        } else if (rangeAge == 'senior') {
            discount = price * discountSenior;
            document.querySelector(".ds-ticket").innerHTML = `Biglietto FrecciaSenior` ;
        } else{
            discount=0;
            document.querySelector(".ds-ticket").innerHTML = `Biglietto intero` ;
        }
        finalPrice= price - discount;
        document.querySelector(".ds-train-price").innerHTML = `${finalPrice.toFixed(2)} €`;
        document.querySelector(".ds-namepass").innerHTML = userName;
        document.querySelector(".ticket-show").classList.remove('d-none');
        document.querySelector(".ds-carriage").innerHTML = randomNumber(1,25);
        document.querySelector(".ds-cpcode").innerHTML = randomNumber(10000,99999);
    } else{
        alert(`ERRORE - Inserire valori numerici`);
    }
})

elButtonClear.addEventListener('click', function(){
    elUserName.value="";
    elRangeAge.value="";
    elUserKm.value="";
    document.querySelector(".ticket-show").classList.add('d-none');
})


