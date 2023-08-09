document.addEventListener('DOMContentLoaded', function() {
    const amount = document.getElementById('amount');
    const currency = document.getElementById('currency');
    const convert = document.getElementById('convert');
    const result = document.getElementById('result');

    const API_KEY=""
    const API_URL="https://api.api-ninjas.com/v1/exchangerate?pair="

    convert.addEventListener('click', () => {
        const amountTotal= amount.value;
        const currencyTotal = currency.value;
        const url = API_URL + currencyTotal + "_PKR";

    fetch(url, {
        headers: {
            'X-API-KEY': API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        const rate = data.exchange_rate;
        const resultPrice = amountTotal * rate;
        result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} PKR`;
    })
    .catch(error => {
        console.error('Request Failed: ', error);
        resultPrice.innerHTML = 'error occured please try again later';
    })
})
})