
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const errorElement = document.getElementById("error");

    if (name === ""  email === ""  message === "") {
        errorElement.textContent = "Будь ласка, заповніть усі поля!";
        return false;
    }

    if (!validateEmail(email)) {
        errorElement.textContent = "Введіть коректну електронну адресу!";
        return false;
    }

    errorElement.textContent = "";  // Очищаємо повідомлення про помилку
    alert("Форма успішно надіслана!");
    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
