function clearInput(){
      var getValue= document.getElementById("celsius");
        if (getValue.value !="") {
            getValue.value = "";
        }
        getValue= document.getElementById("fahrenheit");
          if (getValue.value !="") {
              getValue.value = "";
          }
          getValue= document.getElementById("kelvin");
            if (getValue.value !="") {
                getValue.value = "";
          }
          getValue= document.getElementById("result");
            if (getValue.textContent !="") {
                getValue.textContent = "";
          }

 }
document.getElementById("convertBtn").addEventListener("click", function() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var kelvinInput = document.getElementById("kelvin");
  var result = document.getElementById("result");

  if (celsiusInput.value !== "") {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
    result.textContent = celsius + " Celsius is equal to " + fahrenheit.toFixed(2) + " Fahrenheit and " + kelvin.toFixed(2) + " Kelvin.";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
  }
  else if (fahrenheitInput.value !== "") {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5/9;
    var kelvin = (fahrenheit + 459.67) * 5/9;
    result.textContent = fahrenheit + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius and " + kelvin.toFixed(2) + " Kelvin.";
    celsiusInput.value = "";
    kelvinInput.value = "";
  }
  else if (kelvinInput.value !== "") {
    var kelvin = parseFloat(kelvinInput.value);
    var celsius = kelvin - 273.15;
    var fahrenheit = (kelvin * 9/5) - 459.67;
    result.textContent = kelvin + " Kelvin is equal to " + celsius.toFixed(2) + " Celsius and " + fahrenheit.toFixed(2) + " Fahrenheit.";
    celsiusInput.value = "";
    fahrenheitInput.value = "";
  }
  else {
    result.textContent = "Please enter a temperature.";
  }
});
