const amount = document.getElementById('amount');
const currency = document.getElementById('currency');
const convert = document.getElementById('convert');
const result = document.getElementById('result');

const API_KEY=""
const API_URL=""

convert.addEventListener('click', () => {
    const amountTotal= amount.value;
    const currencyTotal = currency.value;
    const url = API_URL + currencyTotal;

    fetch(url, {
        headers: {
            'X-API-KEY': API_KEY
        }
    })
    .then(data => {
        const rate = data.rate;
        const result = amountTotal * rate;
        result.innerHTML = `${amount} ${currency} = ${result.toFixed(2)} PKR`
    })
    .catch(error => {
        console.error('Request Failed: ', error);
        result.innerHTML = 'error occured please try again later';
    })
})