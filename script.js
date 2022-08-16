// DOM
const input = document.getElementById("input-value")
const convertBtn = document.getElementById("convert-btn")
const paraLength = document.getElementById("length-para")
const paraVolume = document.getElementById("volume-para")
const paraMass = document.getElementById("mass-para")

// Events
convertBtn.addEventListener('click', () => convert())

// Functions
function convert() {
    let num = Number(input.value)
    if (num) {
        let lengthFeet = (num * 3.281).toFixed(3)
        let lengthMeter = (num / 3.281).toFixed(3)
        let volumeGallon = (num * 0.264).toFixed(3)
        let volumeLiter = (num / 0.264).toFixed(3)
        let massPound = (num * 2.204).toFixed(3)
        let massKilogram = (num / 2.204).toFixed(3)
        paraLength.innerHTML = `
        ${input.value} meters = ${lengthFeet} feet | 
        ${input.value} feet = ${lengthMeter} meters
        `
        paraVolume.innerHTML = `
        ${input.value} liters = ${volumeGallon} gallons | 
        ${input.value} gallons = ${volumeLiter} liters
        `
        paraMass.innerHTML = `
        ${input.value} kilos = ${massPound} pounds | 
        ${input.value} pounds = ${massKilogram} kilos
        `
    } else {
        alert("Please input a positive integer.")
    }

}