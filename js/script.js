const temperatureText = document.getElementById('temperature');
temperatureText.addEventListener('keyup', calculateTemperature);

const allUnits = document.querySelectorAll('input[type=radio]');
for (let i = 0; i < allUnits.length; i++) {
    allUnits[i].addEventListener('change', calculateTemperature);
}


function calculateTemperature() {
    const inputUnits = document.getElementsByName('input_temperature');
    const outputUnits = document.getElementsByName('output_temperature');
    const resultCalculate = document.getElementById('result');
    const inputWrapper = document.getElementById('input_wrapper');
    const temperatureValue = parseFloat(temperatureText.value); //konweruje stringa na liczbę przecinkową a parseInt na całkowitą

    if (isNaN(temperatureValue)) {
        resultCalculate.style.display = 'none';
        inputWrapper.classList.add('error'); // właściwość, któa ma w sobie różne metody pozwalające na zarządzanie klasami.
        return false;
    } else {
        inputWrapper.classList.remove('error');
        resultCalculate.style.display = 'inline';
    }


    let inputUnit = '';
    let outputUnit = '';
    let result = '';

    for (let i = 0; i < inputUnits.length; i++) {
        if (inputUnits[i].checked == true) {
            inputUnit = inputUnits[i].value;
        }
    }

    for (let i = 0; i < outputUnits.length; i++) {
        if (outputUnits[i].checked == true) {
            outputUnit = outputUnits[i].value;
        }
    }

    if (inputUnit == 'celsius' && outputUnit == 'kelvin') {
        result = temperatureValue + 273.15;
    } else if (inputUnit == 'celsius' && outputUnit == 'fahrenheit') {
        result = temperatureValue * 1.8 + 32;
    } else if (inputUnit == 'kelvin' && outputUnit == 'celsius') {
        result = temperatureValue - 273.15;
    } else if (inputUnit == 'kelvin' && outputUnit == 'fahrenheit') {
        result = temperatureValue * 1.8 - 459.67;
    } else if (inputUnit == 'fahrenheit' && outputUnit == 'celsius') {
        result = (temperatureValue - 32) / 1.8;
    } else if (inputUnit == 'fahrenheit' && outputUnit == 'kelvin') {
        result = (temperatureValue - 459.67) * 5 / 9;
    } else if (inputUnit == outputUnit) {
        result = temperatureValue;
    }

    switch (outputUnit) {
        case 'celsius':
            result = result + ' °C';
            break;
        case 'kelvin':
            result = result + ' K';
            break;
        case 'fahrenheit':
            result = result + ' °F';
            break;
    }

    resultCalculate.innerHTML = result;
}