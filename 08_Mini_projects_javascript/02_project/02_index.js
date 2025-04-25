const form = document.querySelector('form');
// This use case will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;

    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;

    }else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)  //toFixed(2) is used to display only two decimals '.00'.
        results.innerHTML = `<span>${bmi}</span>`
    
     // Use bmi as a number for comparison
    const bmiValue = parseFloat(bmi);
    const resultsMsg = document.querySelector('#resultsMsg');

        if (bmiValue < 18.6) {
            resultsMsg.innerHTML = `<span>Under Weight</span>`;
        } else if (bmiValue >= 18.6 && bmiValue <= 24.9) {

            resultsMsg.innerHTML = `<span>Normal Range</span>`;
        } else if (bmiValue > 24.9) {
            resultsMsg.innerHTML = `<span>Over Weight</span>`;

        } else {
            resultsMsg.innerHTML = '';
            console.log("Invalid BMI value");
        }
    }
});
