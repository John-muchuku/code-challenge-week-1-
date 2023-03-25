const speedInput = document.getElementById('speed-input');
const calculateButton = document.getElementById('calculate-button');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const speed = parseInt(speedInput.value);

  if (speed < 70) {
    resultDiv.textContent = 'Okay';
  } else {
    const demeritPoints = Math.floor((speed - 70) / 5);

    if (demeritPoints > 12) {
      resultDiv.textContent = 'License suspended';
    } else {
      resultDiv.textContent = `Points: ${demeritPoints}`;
    }
  }
});
