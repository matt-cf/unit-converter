
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    let input = Number(document.getElementById("userInput").value);
    
    length(input);
    volume(input);
    weight(input);
})

function length(num) {
    toFeet = (num * 3.281).toFixed(3);
    toMeter = (num / 3.281).toFixed(3);
    console.log(toFeet, toMeter);
}

function volume(num) {
    toGallon = (num * 0.264).toFixed(3);
    toLiter = (num / 0.264).toFixed(3);
    console.log(toGallon, toLiter)
}

function weight(num) {
    toKilogram = (num * 2.204).toFixed(3);
    toPound = (num / 2.204).toFixed(3)
    console.log(toKilogram, toPound)
}