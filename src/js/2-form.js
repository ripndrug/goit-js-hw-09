const formData = {
    email: "",
    message: "",
}

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const localStorageKey = "feedback-form-state";

let savedData;

try {
    savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};
} catch {
    savedData = {};
}

console.log(savedData)

emailInput.value = savedData.email || "";
messageInput.value = savedData.message || "";
// messageInput.value = localStorage.getItem(localStorageKey) ?? "";

// localStorage.setItem(localStorageKey, JSON.stringify(formData));

form.addEventListener('input', onFormInput);
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {

    if (e.target.nodeName !== 'INPUT' && e.target.nodeName !== 'TEXTAREA') {
        return;
    }

    if (e.target.nodeName === 'INPUT') {
        formData.email = e.target.value;
    }

    if (e.target.nodeName === 'TEXTAREA') {
        formData.message = e.target.value;
    }

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    console.log(formData)

};

function onFormSubmit(e) {
    e.preventDefault();

    if (emailInput.value === "" || messageInput.value === "") {
        alert(`Fill please all fields`);
    }
        console.log(formData)
        localStorage.removeItem(localStorageKey)
    formData.email = "";
    formData.message = "";
    form.reset();
    
}