import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExchangeService from './xchange.js';

//Business Logic

function getExchange(amountUSD, otherCurrency) {
  ExchangeService.getExchange(amountUSD, otherCurrency)
  .then(function(response) {
    if (response.conversion_rates) {
      convert(response, amountUSD, otherCurrency);
    } else {
      printError(response);
    }
  });
}

//UI Logic

function convert(response, amountUSD, otherCurrency) {
  const responses = response.conversion_rates;
  const conversion = responses[otherCurrency] * amountUSD;
  if (conversion === undefined) {
    document.getElementById("results").innerText = `"${otherCurrency}" is not a valid currency`;
  } else if (isNaN(conversion)) {
    document.getElementById("results").innerText = `"${otherCurrency}" is not a valid currency`;
  } else {
    document.getElementById("results").innerText = `${amountUSD} USD = ${conversion} ${otherCurrency}`;
  }
}

function printError(error) {
  document.getElementById("results").innerText = `There was an error accessing the exchange rate data: ${error}.`;
}

function handleForm(event) {
  event.preventDefault();
  const amountUSD = document.getElementById("amount").value;
  const otherCurrency = document.getElementById("currency").value.toUpperCase();
  document.getElementById("amount").value = null;
  document.getElementById("currency").value = null;
  getExchange(amountUSD, otherCurrency);
}

window.addEventListener("load", function() {
  this.document.querySelector('form').addEventListener("submit", handleForm);
});
