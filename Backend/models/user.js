const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
  type: String,
  required: true,
  minlength: 3,
  maxlength: 40
},
email: {
  type: String,
  required: true,
  minlength: 5,
  maxlength: 30,
  unique: true
},
password: {
  type: String,
  required: true,
  minlength: 5,
  maxlength:60
},
role: { 
  type: String,
  enum: ['customer', 'admin'],
  default: 'customer'
},
dateJoined: {
 type: Date,
  default: Date.now 
} 
});

const User = mongoose.model('Users',userSchema);

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email:Joi.string().min(5).max(30).required().email(),
    password: Joi.string().min(5).max(30).required()
  });

  return schema.validate(user);
}

exports.User = User; 
exports.validate = validateUser;