const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   surname: {
      type: String,
      required: true
   },
   password: {
      type: Number,
      required: true
   },
})

module.exports = mongoose.model('User', UserSchema, 'users')
