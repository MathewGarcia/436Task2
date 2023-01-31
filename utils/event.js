import {add} from "./math";
import {mul} from "./multiply";


const eventHandler = () => {

    const addButton =   document.getElementById('add');
    const mulButton = document.getElementById('mul');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const result = document.getElementById('result');
    const updateDomWithAddedNumbers = () => {
        if(number1.value.length < 1 || number2.value.length < 1){
            alert( "please valid numbers.");
            result.innerHTML = "please enter vaild numbers";
            return;
        }
        // result.innerHTML = parseInt(number1.value,10) + parseInt(number2.value, 10);
       result.innerHTML = add(number1.value, number2.value);
    }
    const updateDomWithMultipliedNumbers = () => {
        if(number1.value.length < 1 || number2.value.length < 1){
            alert( "please valid numbers.");
            result.innerHTML = "please enter vaild numbers";
            return;
        }
        result.innerHTML = mul(number1.value, number2.value);
    }
    addButton.addEventListener('click', updateDomWithAddedNumbers);
    mulButton.addEventListener('click', updateDomWithMultipliedNumbers);

}

export {eventHandler};