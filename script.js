function convert() {
    let value = parseFloat(document.getElementById("value").value);
    let scale = document.getElementById("scale").value;
    let result = "";

    if (isNaN(value)) {
        result = "Please enter a valid number.";
    } else {
        if (scale === "celsius") {
            let f = (value * 9/5) + 32;
            let k = value + 273.15;
            result = `Fahrenheit: ${f.toFixed(2)} °F<br>Kelvin: ${k.toFixed(2)} K`;
        } else if (scale === "fahrenheit") {
            let c = (value - 32) * 5/9;
            let k = (value - 32) * 5/9 + 273.15;
            result = `Celsius: ${c.toFixed(2)} °C<br>Kelvin: ${k.toFixed(2)} K`;
        } else if (scale === "kelvin") {
            let c = value - 273.15;
            let f = (value - 273.15) * 9/5 + 32;
            result = `Celsius: ${c.toFixed(2)} °C<br>Fahrenheit: ${f.toFixed(2)} °F`;
        }
    }

    document.getElementById("result").innerHTML = result;
}
