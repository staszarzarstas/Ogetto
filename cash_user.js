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
                } else {
                    // Обработка ошибки
                    console.error("Произошла ошибка при отправке данных на сервер");
                }
            }
        };

        xhr.send(formData); // Отправляем данные формы на сервер
    });
});