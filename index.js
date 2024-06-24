function calculateInterest() {
  const principal = parseFloat(document.getElementById('principal').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const time = parseFloat(document.getElementById('time').value);

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
      alert('Please enter positive values for all fields.');
      return;
  }

  const interest = (principal * rate * time) / 100;
  const totalAmount = principal + interest;

  document.getElementById('result').innerHTML = 
      `<p>Interest earned: $${interest.toFixed(2)}</p>` +
      `<p>Total amount after ${time} years: $${totalAmount.toFixed(2)}</p>`;
}
