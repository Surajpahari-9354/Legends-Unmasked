function calculatePower() {
  const power = parseFloat(document.getElementById('power').value);
  const multiplier = parseFloat(document.getElementById('multiplier').value);
  const result = document.getElementById('result');

  if (isNaN(power) || isNaN(multiplier)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }

  const total = power * multiplier;
  result.textContent = `Your Hero Power Level is: ${total}`;
}
