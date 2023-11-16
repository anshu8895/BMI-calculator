
const form = document.querySelector('form');
const height_input = document.querySelector('.height');
const weight_input = document.querySelector('.weight');

const popup = document.querySelector('.popup');
const close = document.querySelector('.close-btn');


//click
form.addEventListener('submit', function (e) {
    e.preventDefault();
    let height = parseInt(height_input.value);
    let weight = parseInt(weight_input.value);
    let text;

    const bmi_score = document.querySelector('.bmi-score');
    const bmi_text = document.querySelector('.bmi-text')

    if (height == '' || height < 0 || isNaN(height)) {
        alert("Please enter a valid height");
        height_input.focus();
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        alert("Please enter a valid weight");
        weight_input.focus();
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.5) {
            text = "You are underweight";
        } else if (bmi >= 18.5 && bmi < 25) {
            text = "You are healthy";
        } else {
            text = "You are overweight";
        }

        //show popup
        popup.style.display = 'block';

        //display BMI score
        bmi_score.innerHTML = bmi;
        bmi_text.innerHTML = text;

        //clear value of the input
        height_input.value = '';
        weight_input.value = '';

    }
});

//close popup
function closePopup() {
    popup.style.display = 'none';
}

close.addEventListener('click', function (e) {
    closePopup();
});

document.addEventListener('click', function (e) {
    var isClickInsidePopup = popup.contains(e.target);
    if (!isClickInsidePopup) {
        closePopup();
    }
});

