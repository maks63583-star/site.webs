const textElement = document.querySelector('.typing-text');
const text = "Добро пожаловать на мою страницу!";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        textElement.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Скорость печатания (50 миллисекунд)
    }
}

// Запускаем анимацию после загрузки страницы
document.addEventListener("DOMContentLoaded", typeWriter);