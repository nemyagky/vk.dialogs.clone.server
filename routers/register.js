const express = require('express');
const router = express.Router();
const UserSchema = require('../models/User');

router.post('/register', (req, res) => {
   getUser(req.query.name, req.query.surname, req.query.password).then((user) => {

      if (!user) {
         const userSchema = new UserSchema({
            name: req.body.name,
            surname: req.body.surname,
            password: req.body.password
         })
      
         // .save() добавляет новую запись в БД
         userSchema.save().then(data => {
            res.json(data);
         }).catch(err => {
            res.json({message: err})
         })
      } else {
         res.json({message: 'Пользователь уже существует!'})
      }

   }).catch((err) => {
      res.json(err)
   })
})

router.get('/auth', (req, res) => {
   getUser(req.query.name, req.query.surname, req.query.password).then((user) => {
      if (user) {
         res.json(user)
      } else {
         res.json({message: 'Пользователь не найден!'})
      }
   }).catch((err) => {
      res.json({message: err})
   })
})

function getUser(name, surname, password) {
   console.log(name, surname, password)
   return new Promise((resolve, reject) => {
      if (name === undefined || surname === undefined || password === undefined) reject('Указаны не все параметры, необходимые для авторизации!');
      UserSchema.find({name: name, surname: surname, password: password}).exec((err, data) => {
         if (err) reject(err);

         if (data.length) {
            resolve(data)
         } else {
            resolve(false)
         }
      })
   })
}

module.exports = router
