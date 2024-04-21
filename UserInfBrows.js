document.addEventListener('DOMContentLoaded', function() {
    // Получаем данные профиля из локального хранилища
    const profileData = JSON.parse(localStorage.getItem('profileData'));

    // Отображаем данные на странице
    const profileDataContainer = document.getElementById('profileData');
    if (profileData) {
        profileDataContainer.innerHTML = `
            <p>Имя: ${profileData.firstName}</p>
            <p>Фамилия: ${profileData.lastName}</p>
            <p>Должность: ${profileData.position}</p>
            <p>Отдел: ${profileData.department}</p>
            <p>Электронная почта: ${profileData.email}</p>
            <p>Номер телефона: ${profileData.phone}</p>
            <p>Интересы: ${profileData.interests}</p>
            <p>Навыки: ${profileData.skills}</p>
        `;
    } else {
        profileDataContainer.innerHTML = '<p>Профиль не заполнен</p>';
    }
});

// JavaScript для открытия/закрытия бургер-меню
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('navigation');
    const burger = document.querySelector('.burger-menu');

    // Переключение активного класса для открытия/закрытия меню
    burger.addEventListener('click', function(event) {
        menu.classList.toggle('active');
        event.stopPropagation(); // Остановка всплытия события, чтобы не сработал обработчик click на документе
    });

    // Закрытие меню при клике вне его области
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideBurger = burger.contains(event.target);
        if (!isClickInsideMenu && !isClickInsideBurger) {
            menu.classList.remove('active');
        }
    });
});