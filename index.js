windows.onload = init;

function addBtnClicked() {
    let num1 = +(document.getElementById("box1Number").value);
    let num2 = +(document.getElementById("box2Number").value);
    let result = num1 + num2;
    document.getElementById("answerDisplay").textContent = result;
}

function subtractBtnClicked() {
    let num1 = +(document.getElementById("box1Number").value);
    let num2 = +(document.getElementById("box2Number").value);
    let result = num1 - num2;
    document.getElementById("answerDisplay").textContent = result;
}

function multiplyBtnClicked() {
    let num1 = +(document.getElementById("box1Number").value);
    let num2 = +(document.getElementById("box2Number").value);
    let result = (num1 * num2).toFixed(2);
    document.getElementById("answerDisplay").textContent = result;
}

function divideBtnClicked() {
    let num1 = +(document.getElementById("box1Number").value);
    let num2 = +(document.getElementById("box2Number").value);
    let result = (num1 / num2).toFixed(2);
    document.getElementById("answerDisplay").textContent = result;
}