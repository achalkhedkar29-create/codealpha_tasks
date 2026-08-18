let display = document.getElementById("display");
 
console.log("JavaScript connected!");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event) {
    let key = event.key;
    if (
        key==="0" || key==="1" || key==="2" || key==="3" || key==="4" || key==="5" || key==="6" || key==="7" || key==="8" || key==="9" ||
     key==="+" || key==="-" || key==="*" || key==="/" || key==="." )
    {
        appendValue(key);
    }

    else if (key === "Enter") {
        calculate();
    }

    else if (key === "Backspace") {
        deleteLast();
    }

    else if (key === "Escape") {
        clearDisplay();
    }
});
