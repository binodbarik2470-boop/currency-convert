function convertCurrency() {

  const amount = document.getElementById("amount").value;

  const fromCurrency = document.getElementById("fromCurrency").value;

  const toCurrency = document.getElementById("toCurrency").value;

  const rates = {
    USD: 1,
    INR: 83,
    EUR: 0.92,
    GBP: 0.78
  };

  const convertedAmount =
    (amount / rates[fromCurrency]) * rates[toCurrency];

  document.getElementById("result").innerHTML =
    `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
