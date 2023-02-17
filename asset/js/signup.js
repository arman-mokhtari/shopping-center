const form = document.querySelector("#form");
const tel = document.querySelector("#tel");


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInp();
});

function checkInp() {
    const telvalue = tel.value.trim();

    if (telvalue === "") {
        setError(tel, "لطفا این قسمت را خالی نگذارید");
    } else {
        setSuccess(tel);
    }
}

function setError(input, message) {
    const formControl = input.parentElement;
    const span = formControl.querySelector("span");
    span.innerHTML = message;
    formControl.className = "form error-sign";
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form success"
}