{

    const calculateResult = (amount, currency) => {

        const rateEUR = 4.7018;
        const rateUSD = 4.4626;
        const rateGBP = 5.2811;
        const rateNOK = 0.4172;

        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "NOK":
                return amount / rateNOK;
        }

    }

    const updateResultText = (result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = result.toFixed(2);
    }

    const onFormSubmit = (event) => {
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        event.preventDefault();

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(result);
    }
    
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);

    }

    init();

}