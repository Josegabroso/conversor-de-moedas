var inputReal = document.getElementById('input-real');
var spanResult = document.getElementById("result");
var currentValueDollar
var spanCurrentValueDollar = document.getElementById('current-value-dollar')

fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
    .then((response) => response.json())
    .then((response) => {
        currentValueDollar =  response.USDBRL.bid
        spanCurrentValueDollar.innerHTML = Number(currentValueDollar).toFixed(2).replace('.' , ',')
    })

function convertToDollar() {
    var realValue = inputReal.value;
    var result = Number(realValue) / currentValueDollar;

    var resultValue = result.toFixed(2)

    spanResult.innerHTML = 'US$' + resultValue
}