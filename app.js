// Express
const express = require('express');
const app = express();
// Для удобной работы с mongoDB
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = 'mongodb://localhost:27017/vk-server';
const registerRoute = require('./routers/register');

// Добавляем слушатели из файла /router/register
// Парсим все requests от сервера в нормальный вид
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(registerRoute);

// Соединяемся с БД. Объект нужен, чтобы компилятор не ругался (типо эти свойства скоро перестанут использоваться)
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log('connected');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT || 3000, () => {});
