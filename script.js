{
    const calculateResult = (currency) => {
        const rateEUR = 4;
        const rateGBP = 5;
        const rateUSD = 3;

        switch (amount, currency) {
            case "EUR":
                return = amount / rateEUR;

            case "USD":
                return = amount / rateUSD;

            case "GBP":
                return = amount / rateGBP;
        }
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", OnFormSubmit);

    };

    const updateResultText = (amount, result, currency) => {

        const resultElement = document.querySelector(".js-result");
        const resultInfo = document.querySelector(".js-info");

        resultElement.textContent = `${amount} PLN wynosi ${result.toFixed(2)} ${currency}`;
        resultInfo.textContent = `Kurs walut NBP na dzień: 10 października 2023 r.`;
    };

    const OnFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;


        result = calculateResult(amount, currency);


        updateResultText(amount, result, currency);
    };

    init();

}