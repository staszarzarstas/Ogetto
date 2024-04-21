// client.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("profileForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

        const formData = new FormData(form); // Создаем объект FormData для сбора данных формы

        // Далее вы можете выполнить AJAX-запрос для отправки данных на сервер
        const xhr = new XMаLHttpRequest();
        xhr.open("POST", "/profiles"); // Изменено на правильный адрес вашего бэк-энд сервера

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 201) { // Изменено на 201, так как мы ожидаем статус 201 (Created) от сервера
                    // Обработка успешного ответа от сервера
                    console.log("Данные успешно отправлены на сервер!");
                } else {
                    // Обработка ошибки
                    console.error("Произошла ошибка при отправке данных на сервер");
                }
            }
        };

        xhr.send(formData); // Отправляем данные формы на сервер
    });
});

// Добавьте остальной клиентский JavaScript, если он есть

// client.js

// Функция для сохранения введенного хобби
function saveHobby() {
    var hobby = document.getElementById('hobby').value; // Получаем введенное хобби
    var savedHobby = document.getElementById('savedHobby');
    // Отображаем сохраненное хобби
    savedHobby.innerHTML = '<strong>Ваше хобби:</strong> ' + hobby;
    savedHobby.style.display = 'block'; // Показываем элемент
}

document.addEventListener('DOMContentLoaded', function() {
    var meetingForm = document.getElementById('meetingForm');
    var savedHobby = document.getElementById('savedHobby');
    var hobbyInput = document.getElementById('hobbyInput');

    meetingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var hobbyValue = hobbyInput.value.trim(); // Получаем значение из текстового поля хобби
        if (hobbyValue !== '') {
            var savedHobbyText = savedHobby.textContent.trim(); // Получаем текущий текст сохраненного хобби
            if (savedHobbyText !== '') {
                savedHobbyText += ', ' + hobbyValue; // Добавляем новое хобби к старому, если уже есть сохраненное хобби
            } else {
                savedHobbyText = hobbyValue; // Если нет сохраненного хобби, просто устанавливаем новое значение
            }
            savedHobby.textContent = savedHobbyText; // Устанавливаем обновленный текст сохраненного хобби
            hobbyInput.value = ''; // Очищаем текстовое поле хобби
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("profileForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

        const formData = new FormData(form); // Создаем объект FormData для сбора данных формы

        // Далее вы можете выполнить AJAX-запрос для отправки данных на сервер
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/profiles"); // Изменено на правильный адрес вашего бэк-энд сервера

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 201) { // Изменено на 201, так как мы ожидаем статус 201 (Created) от сервера
                    // Обработка успешного ответа от сервера
                    console.log("Данные успешно отправлены на сервер!");
                    // Перенаправление пользователя на страницу личного кабинета
                    window.location.href = "/личный-кабинет.html"; // Замените на реальный путь к вашему личному кабинету
                } else {
                    // Обработка ошибки
                    console.error("Произошла ошибка при отправке данных на сервер");
                }
            }
        };

        xhr.send(formData); // Отправляем данные формы на сервер
    });
});