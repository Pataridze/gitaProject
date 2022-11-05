var checkbox1 = document.getElementById('checkbox1');
var checkbox2 = document.getElementById('checkbox2');
var checkbox3 = document.getElementById('checkbox3');

var eligibilityStatus = document.getElementById('status-check');
var takeLoanButton = document.getElementById('loan-apply-button');
var loanCalc = document.getElementById('loan-calculator');
var loanTable = document.getElementById('main-box');

function checkboxChecker() {
  if (
    checkbox1.checked == true &&
    checkbox2.checked == true &&
    checkbox3.checked == true
  ) {
    eligibilityStatus.textContent = 'Status: Eligible';
    eligibilityStatus.style.background = 'green';
    takeLoanButton.style.display = 'block';
  }
}

function showLoanCalculator() {
  loanCalc.style.display = 'block';
  loanTable.style.display = 'block';
}

checkbox1.addEventListener('click', checkboxChecker);
checkbox2.addEventListener('click', checkboxChecker);
checkbox3.addEventListener('click', checkboxChecker);

takeLoanButton.addEventListener('click', showLoanCalculator);

function round(number, digits) {
  const num = parseFloat(number.toFixed(digits));
  return num;
}

const mainBox = document.getElementById('main-box');
const summaryBox = document.getElementById('summary');

class Calculator {
  constructor(rate, prvalue, npr, currentPeriod) {
    this.r = rate / 100 / 12;
    this.n = npr * 12;
    this.presentValue = prvalue;
    this.curPeriod = currentPeriod;
    this.calculatePmt();
  }

  calculatePmt() {
    const totalPmt =
      this.presentValue /
      ((Math.pow(1 + this.r, this.n) - 1) /
        (this.r * Math.pow(1 + this.r, this.n)));
    const pmt = parseFloat(totalPmt.toFixed(2));
    let periodStBalance = this.presentValue;
    let intPmt;
    let pPmt;
    let perEndBalance;
    let sumIntPmt = 0;
    let contents;
    contents = document.getElementById('hook');

    for (let i = 1; i < this.n + 1; i++) {
      intPmt = periodStBalance * ((this.r * 12) / 360) * 30;
      pPmt = i === this.n ? periodStBalance : pmt - intPmt;
      let thePmt = i === this.n ? pPmt + intPmt : pmt;
      // pPmt = pmt - intPmt;
      perEndBalance = periodStBalance - pPmt;
      sumIntPmt += intPmt;
      contents.innerHTML += `
        <tr>
        <td>${i}</td>
        <td>${round(periodStBalance, 2).toLocaleString()}</td>
        <td>${round(thePmt, 2).toLocaleString()}</td>
        <td>${round(intPmt, 2).toLocaleString()}</td>
        <td>${round(pPmt, 2).toLocaleString()}</td>
        <td>${round(perEndBalance, 2).toLocaleString()}</td>
        </tr>
      `;
      periodStBalance = perEndBalance;
    }
  }
}

let userInputs = [];

const submit = document.querySelector('form');

submit.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log(event);
  let i = 0;
  while (i < 3) {
    userInputs.push(parseInt(event.target[i].value));
    i++;
  }
  console.log(userInputs);
  let calc = new Calculator(userInputs[0], userInputs[1], userInputs[2]);
  // console.log(userInputs)
});
