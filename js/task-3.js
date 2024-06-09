const inputName = document.querySelector("#name-input");
const spanName = document.querySelector("#name-output");

inputName.addEventListener("input", handlerInput);

function handlerInput(event) {
    const value = event.currentTarget.value.trim();

    if (value !== "") {
        spanName.textContent = value;
    } else {
        spanName.textContent = "Anonymous";
    }
}