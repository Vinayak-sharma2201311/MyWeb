var lastinput = ""
function updateDisplay(val1) {
    document.getElementById("display").value = document.getElementById("display").value + val1
    lastinput = val1
}
function clearDisplay() {
    document.getElementById("display").value = ""
}
function deleteDisplay() {
    document.getElementById("display").value = document.getElementById("display").value - lastinput
}
function evalDisplay() {
    document.getElementById("display").value = eval(document.getElementById("display").value)
}