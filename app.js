
const inputText = document.getElementById('input-text');
const resultText = document.getElementById('result-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const copyButton = document.getElementById('copy-text-button');

// Not Found
const notFoundImg = document.getElementById('not-found-img');
const notFoundText = document.getElementById('not-found-text');

// Funciones
const validateInput = (input) => {
    // Validar que el input no tenga mayúsculas. Espacios permitidos.
    const regex = /^[a-z\s]*$/;
    const isValid = regex.test(input);

    if (!isValid) {
        return false;
    }

    return true;
};

const encryptText = (text) => {
    const encryptedText = text.split('').map((char) => {
        return String.fromCharCode(char.charCodeAt(0) + 1);
    }).join('');

    return encryptedText;
};

const decryptText = (text) => {
    const decryptedText = text.split('').map((char) => {
        return String.fromCharCode(char.charCodeAt(0) - 1);
    }).join('');

    return decryptedText;
};

// Listeners
encryptButton.addEventListener('click', () => {
    const currentValue = inputText.value;
    
    // Validar input. No mayusculas, no caracteres especiales.
    if (!validateInput(currentValue)) {
        alert('Por favor, ingresa un texto válido. Solo letras minúsculas.');
        return;
    }

    const result = encryptText(currentValue);

    // Modificar estilos.
    notFoundText.style.display = 'none';
    notFoundImg.style.display = 'none';

    copyButton.hidden = false;
    resultText.hidden = false;

    resultText.textContent = result;
});

decryptButton.addEventListener('click', () => {
    const currentValue = inputText.value;

    if (!validateInput(currentValue)) {
        alert('Por favor, ingresa un texto válido. Solo letras minúsculas.');
        return;
    }

    const result = encryptText(decryptText(currentValue));
    resultText.textContent = result;
});

copyButton.addEventListener('click', () => {
    const currentValue = inputText.value;
    navigator.clipboard.writeText(currentValue);
});
