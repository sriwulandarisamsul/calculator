let resultscreen = document.getElementById("result-screen");

// --------------------NUMBER EVENT--------------------
function display (num) {
    resultscreen.value += num;
}

// --------------------MEMBERIKAN ALERT--------------------
function calculator() {
    try {
        resultscreen.value = eval(resultscreen.value);
    }
    catch(err) {
        alert("invalid");
    }
}

// --------------------EVENT CLEAR--------------------
function clr() {
    resultscreen.value = "";
}

// --------------------EVENT DEL--------------------
function del() {
    resultscreen.value = resultscreen.value.slice(0, -1);
}

// --------------------PANGKAT EVENT--------------------
function rank() {
    resultscreen.value = Math.pow(resultscreen.value,2);
}