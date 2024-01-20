const formCalculatorEl = document.querySelector('#form-calc');
const tipValue = document.querySelector("#tips-value");
const totalValue = document.querySelector("#total-value");
const inputBillValue = document.querySelector("#input-bill");

console.log(formCalculatorEl);

const calcTips = (billValue, qualityService, qtyPeople) => {
    const result = (billValue / qtyPeople) * (qualityService / 100);
    console.log('result', result);
}

const calcTotal = () => {};

formCalculatorEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const targetEl = e.target.elements;

    // console.log('test', inputBillValue.test.value);

    const inputBillvalue = targetEl['input-bill-value'].value;
    const selectQualityService = targetEl['select-quality-service'].value;
    const inputQtyPeople = targetEl['input-qty-people'].value;

    console.log('selectQualityService', selectQualityService);
    console.log('inputBillvalue', inputBillvalue);
    console.log('inputQtyPeople', inputQtyPeople);

    calcTips(inputBillvalue, selectQualityService, inputQtyPeople);
});

