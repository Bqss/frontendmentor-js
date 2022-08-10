const cardNameIn = document.querySelector('#card_name');
const cardNumberIn = document.querySelector('#card_number');
const cardDateIn = document.querySelectorAll('.card_dateIn');
const cardCvcIn = document.querySelector('#CVC--in');

const cardName = document.querySelector('.card--name'); 
const cardNum = document.querySelector('.card--number');
const cardDate = document.querySelectorAll('.card_date');
const cardCvc = document.querySelector('.card--CVC');

console.log(cardDateIn);
console.log(cardDate);

cardNameIn.oninput = () => {
    cardName.innerText = cardNameIn.value;
}
cardCvcIn.oninput = () => {
    cardCvc.innerText = cardCvcIn.value;
}
cardDateIn.forEach( (e, i) => {
    e.oninput = () => {
        console.log('tes')
        cardDate[i].innerText = e.value;
    }
})





cardNumberIn.oninput = () => {
    const cardNumber = cardNumberIn.value.split(' ').join('');
    if(cardNumber ===''){
        cardNum.innerText = '0000 0000 0000 0000';
        return;
    };
    const formatted = formatCC(cardNumber);
    cardNum.innerText = formatted;
    cardNumberIn.value = formatted;

}

const formatCC = (number) => {
    return number.match(/.{1,4}/g).join(' ');
}