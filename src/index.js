import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './xchange.js';

//Business Logic

function getExchange(otherCurrency) {
  ExchangeService.getExchange(otherCurrency)
  .then(function(response) {
    if (response.conversion_rates) {
      //printElements(response, amountUSD, otherCurrency);
      convert(response, amountUSD, otherCurrency);
    } else {
      //printError(response);
    }
  });
}


//UI Logic

function convert(response, otherCurrency) {
  const responses = response.conversion_rates;
  const conversion = responses.otherCurrency;
  document.getElementById("results").innerText = conversion 
}

function handleForm(event) {
  event.preventDefault();
  const amountUSD = document.getElementById("amount").value;
  const otherCurrency = document.getElementById("currency").value;
  document.getElementById("amount").value = null;
  document.getElementById("currency").value = null;
  getExchange(amountUSD, otherCurrency);
}

window.addEventListener("load", function() {
  this.document.querySelector('form').addEventListener("submit", handleForm);
});
