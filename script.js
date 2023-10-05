let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let resultInfo = document.querySelector(".js-info");



formElement.addEventListener("submit", (event) => {
    event.preventDefault();



    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let rateEUR = 4;
    let rateGBP = 5;
    let rateUSD = 3;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;

        case "USD":
            result = amount / rateUSD;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;
    };

    resultElement.textContent = `${amount} PLN wynosi ${result.toFixed(2)} ${currency}`;
    resultInfo.textContent = `Kurs walut NBP na dzień: 10 października 2023 r.`;
});