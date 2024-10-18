document
  .getElementById("changeButton")
  .addEventListener("click", changeCurrency);

function changeCurrency() {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://v6.exchangerate-api.com/v6/97be8824bbcfa0c4de06dc62/latest/USD",
    true
  );
  xhr.onload = function () {
    if (this.status === 200) {
      const lira = JSON.parse(this.responseText).conversion_rates.TRY;
      const amount = Number(document.getElementById("dolarInput").value);
      document.getElementById("liraInput").value = (amount * lira).toFixed(2);
    }
  };
  xhr.send();
}
