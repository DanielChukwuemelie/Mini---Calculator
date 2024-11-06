// Call the dDOM Button and attachbthe event listeners to run every other codes when clicked //
document.getElementById("btn").addEventListener("click", () => {

    // Get elements from the DOM //
    let num1 = document.querySelector(".num1").value;
    let num2 = document.querySelector(".num2").value;
    let results = document.querySelector(".result");
    let operators = document.getElementById("selectOp").value;

    // Now use conditions for each operators //
    if (operators === "add") {
        results.textContent = Number(num1) + Number(num2);
    }

    else if (operators === "minus") {
        results.textContent = Number(num1) - Number(num2);
    }

    else if (operators === "divide") {
        results.textContent = Number(num1) / Number(num2);
    }

    else if (operators === "multiply") {
        results.textContent = Number(num1) * Number(num2);
    }

    else {
        results.textContent = "Invalid Operator";
    }

});