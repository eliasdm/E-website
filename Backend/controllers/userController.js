const {User, validate} = require('../models/user')
const _ = require('lodash');
const bcrypt =require('bcrypt')


const createUser = async(req,res) => {
    
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let user = await User.findOne({ email: req.body.email }); // to check if the user is registed
    if (user) return res.status(400).send('User already registered.');
  
    //craate new user
    user = new User(_.pick(req.body, ['name', 'email', 'password']));
    const salt = await bcrypt.genSalt(5);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    res.send(user)
  
   
}

module.exports =  { createUser }