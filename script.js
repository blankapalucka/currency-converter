let formElement= document.querySelector(".js-form")
let amountElement= document.querySelector(".js-amount")
let currencyElement= document.querySelector(".js-currency")
let resultElement= document.querySelector(".js-result")


let rateEUR= 4.7018;
let rateUSD= 4.4626;
let rateGBP= 5.2811;
let rateNOK= 0.4172;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount= +amountElement.value;
    let currency= currencyElement.value;

console.log(amount,currency)

    let result;

    switch (currency) {
        case "EUR":
        result= amount / rateEUR;
        break;
        case "USD":
        result= amount / rateUSD;
        break;
        case "GBP":
        result= amount / rateGBP;
        break;
        case "NOK":
        result= amount / rateNOK;
        break;
       
    }

    resultElement.innerHTML = result.toFixed(2);
})
