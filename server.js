// server.js

const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 3000;

// Подключение к базе данных SQLite
const db = new sqlite3.Database('/DB');

// Создание таблицы для профилей сотрудников
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS profiles (
    id INTEGER PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    position TEXT,
    department TEXT,
    email TEXT,
    phone TEXT,
    interests TEXT,
    skills TEXT
  )`);
});

app.use(cors()); // Разрешить CORS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Добавление профиля сотрудника
app.post('/profiles', (req, res) => {
    const profileData = req.body;
    db.run(`INSERT INTO profiles (firstName, lastName, position, department, email, phone, interests, skills) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, [profileData.firstName, profileData.lastName, profileData.position, profileData.department, profileData.email, profileData.phone, profileData.interests, profileData.skills],
        function(err) {
            if (err) {
                console.error(err);
                res.status(500).send('Произошла ошибка при добавлении профиля');
            } else {
                res.status(201).send({ id: this.lastID });
            }
        });
});

// Удаление профиля сотрудника
app.delete('/profiles/:id', (req, res) => {
    const profileId = req.params.id;
    db.run(`DELETE FROM profiles WHERE id = ?`, profileId, function(err) {
        if (err) {
            console.error(err);
            res.status(500).send('Произошла ошибка при удалении профиля');
        } else {
            res.status(200).send('Профиль успешно удален');
        }
    });
});

// Получение статистики
// Здесь вы можете добавить обработчики для получения необходимой статистики

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});