function loadBankData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    receivedJson = JSON.parse(this.responseText);
    // demo.textContent = receivedJson.record[0].debitCardTypes[0];
    console.log(receivedJson);
    console.log(receivedJson.record[0].debitCardTypes[0]);
    document.getElementById('t-1').textContent =
      receivedJson.record[0].debitCardTypes;
    document.getElementById('t-2').textContent =
      receivedJson.record[0].dailyLimit;
    document.getElementById('t-3').textContent =
      receivedJson.record[0].cashOutCharge;

    document.getElementById('b-1').textContent =
      receivedJson.record[1].debitCardTypes;
    document.getElementById('b-2').textContent =
      receivedJson.record[1].dailyLimit;
    document.getElementById('b-3').textContent =
      receivedJson.record[1].cashOutCharge;

    document.getElementById('l-1').textContent =
      receivedJson.record[2].debitCardTypes;
    document.getElementById('l-2').textContent =
      receivedJson.record[2].dailyLimit;
    document.getElementById('l-3').textContent =
      receivedJson.record[2].cashOutCharge;

    document.getElementById('c-1').textContent =
      receivedJson.record[3].debitCardTypes;
    document.getElementById('c-2').textContent =
      receivedJson.record[3].dailyLimit;
    document.getElementById('c-3').textContent =
      receivedJson.record[3].cashOutCharge;
  };
  xhttp.open(
    'GET',
    'https://api.jsonbin.io/v3/b/636614062b3499323bf6190e/latest',
    true
  );
  xhttp.send();
}

var importButton = document.getElementById('importData');
importButton.addEventListener('click', loadBankData);
