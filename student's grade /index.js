const marksInput = document.getElementById("marks-input");
const submitButton = document.getElementById("submit-button");
const resultDiv = document.getElementById("result");

submitButton.addEventListener("click", () => {
	const marks = marksInput.value;
	let grade;

	if (marks >= 80) {
		grade = "A";
	} else if (marks >= 60) {
		grade = "B";
	} else if (marks >= 50) {
		grade = "C";
	} else if (marks >= 40) {
		grade = "D";
	} else {
		grade = "E";
	}

	resultDiv.innerHTML = `The student's grade is ${grade}.`;
});
