// KRA tax brackets and rates
const taxBrackets = [
  { range: [0, 24000], rate: 0.1, relief: 2400 },
  { range: [24001, 40667], rate: 0.15, relief: 2400 },
  { range: [40668, 57133], rate: 0.20, relief: 2400 },
  { range: [57134, 73333], rate: 0.25, relief: 2400 },
  { range: [73334, 99999999], rate: 0.3, relief: 2400 },
];

// NHIF and NSSF rates
const nhifRate = 0.01;
const nssfRate = 0.06;

function calculate() {
  const basicSalary = Number(document.getElementById("basicSalary").value);
  const benefits = Number(document.getElementById("benefits").value);

  // gross salary
  const grossSalary = basicSalary + benefits;

  // taxable income
  const taxableIncome = grossSalary - 2400;

  // income tax
  let incomeTax = 0;
  for (let i = 0; i < taxBrackets.length; i++) {
    const bracket = taxBrackets[i];
    if (taxableIncome >= bracket.range[0] && taxableIncome <= bracket.range[1]) {
      incomeTax = (taxableIncome - bracket.relief) * bracket.rate;
      break;
    }
  }

  // NHIF deduction
  const nhifDeduction = Math.min(1700, grossSalary * nhifRate);

  // NSSF deduction
  const nssfDeduction = Math.min(1800, grossSalary * nssfRate);

  // total deductions
  const totalDeductions = incomeTax + nhifDeduction + nssfDeduction;

  //net salary
  const netSalary = grossSalary - totalDeductions;

  //  the UI
  document.getElementById("grossSalary").textContent = grossSalary.toFixed(2);
  document.getElementById("incomeTax").textContent = incomeTax.toFixed(2);
  document.getElementById("nhifDeduction").textContent = nhifDeduction.toFixed(2);
  document.getElementById("nssfDeduction").textContent = nssfDeduction.toFixed(2);
  document.getElementById("totalDeductions").textContent = totalDeductions.toFixed(2);
  document.getElementById("netSalary").textContent = netSalary.toFixed(2);
}




