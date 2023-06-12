
const convertBtn = document.getElementById("convert-btn")
let lengthText = document.getElementById("length");
let volumeText = document.getElementById("volume");
let massText = document.getElementById("mass");

convertBtn.addEventListener("click", function() {
    let input = Number(document.getElementById("userInput").value);
    length(input);
    volume(input);
    mass(input);
})

function length(num) {
    toFeet = (num * 3.281).toFixed(3);
    toMeter = (num / 3.281).toFixed(3);
    let sentence = `${toMeter} meters | ${toFeet} feet`;
    lengthText.textContent = sentence
}

function volume(num) {
    toGallon = (num * 0.264).toFixed(3);
    toLiter = (num / 0.264).toFixed(3);
    let sentence = `${toGallon} gallons | ${toLiter} liters`;
    volumeText.textContent = sentence
}

function mass(num) {
    toKilogram = (num * 2.204).toFixed(3);
    toPound = (num / 2.204).toFixed(3);
    let sentence = `${toKilogram} kilograms | ${toPound} pounds`;
    massText.textContent = sentence
}