function calculateInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);

  if (isNaN(principal) || principal <= 0) {
    alert('Please enter a positive value for the principal amount.');
    return;
}

if (isNaN(rate) || rate <= 0) {
    alert('Please enter a positive value for the annual interest rate.');
    return;
}

if (isNaN(time) || time <= 0) {
    alert('Please enter a positive value for the time period.');
    return;
}

  const interest = (principal * rate * time) / 100;
  const totalAmount = principal + interest;

  document.getElementById('result').innerHTML = 
      `<p>Interest earned: $${interest.toFixed(2)}</p>` +
      `<p>Total amount after ${time} years: $${totalAmount.toFixed(2)}</p>`;
}
