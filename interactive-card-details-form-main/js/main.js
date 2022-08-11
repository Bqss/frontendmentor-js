const cardNameIn = document.querySelector('#card_name');
const cardNumberIn = document.querySelector('#card_number');
const cardDateIn = document.querySelectorAll('.card_dateIn');
const cardCvcIn = document.querySelector('#CVC--in');
const cardName = document.querySelector('.card--name'); 
const cardNum = document.querySelector('.card--number');
const cardDate = document.querySelectorAll('.card_date');
const cardCvc = document.querySelector('.card--CVC');
const cardForm = document.querySelector('.form__container');
const blankError = "Can't be blank";
const containNumberError = "Wrong format, numbers only"; 

cardNameIn.oninput = () => {
    cardName.innerText = cardNameIn.value;
    errorHandler( cardNameIn , validate(cardNameIn));
   
}
cardCvcIn.oninput = () => {
    cardCvc.innerText = cardCvcIn.value;
    errorHandler(cardCvcIn , validate2(cardCvcIn));

}
cardDateIn.forEach( (e, i) => {
    e.oninput = (event) => {
        cardDate[i].innerText = e.value;
        errorHandler( event.target , validate2(event.target));

    }
});

cardNumberIn.oninput = () => {
    const cardNumber = cardNumberIn.value.replaceAll(' ','');
    errorHandler(cardNumberIn, validate2(cardNumberIn));

    if(cardNumber ===''){
        cardNum.innerText = '0000 0000 0000 0000';
        return;
    };
    const formatted = formatCC(cardNumber);
    cardNum.innerText = formatted;
    cardNumberIn.value = formatted;
}

cardForm.addEventListener('submit' , (event) => {
   event.preventDefault();
   validateAll();

});

// util
const validate2 = (element) => {

    if(IsBlank(element)){
        generateError(element , blankError);
        return false;
    }
    if(isNotContainNumber(element)){
        generateError(element, containNumberError);
        return false;
    }else{
        removeError(element);
        return true;
    }
}
const validate = (element)=> {
    if(IsBlank(element)) {
        generateError(element ,blankError);
        return false;
    }else{
        removeError(element);
        return true;
    }
}

const generateError = (element , message) => {
    const parent = !element.parentElement.classList.contains('flex') ? element.parentElement : element.parentElement.parentElement;
    const validate = parent.querySelector('.validate');
    validate.innerText = message;
    validate.style.display = 'block';
}
const removeError = (element) => {
    const parent = !element.parentElement.classList.contains('flex') ? element.parentElement : element.parentElement.parentElement;
    const validate = parent.querySelector('.validate');
    validate.style.display = 'none';
}
const IsBlank = (element) => {
    return !Boolean(element.value);
}
const isNotContainNumber = (element) => {
    return isNaN(Number(element.value.replaceAll(' ', '')));
}

const formatCC = (number) => {
    return number.match(/.{1,4}/g).join(' ');
}
const errorHandler = (element,conditional) => {
    conditional ? element.classList.remove('wrong') : element.classList.add('wrong');
}
const validateAll = () => { 
    const isValidName = IsBlank()
}


