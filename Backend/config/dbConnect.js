const { default: mongoose } = require("mongoose");

module.exports =function(){
mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('Connected to MongoDB...'))
.catch((err) => console.error(`Could not connect to MongoDB... ${err.message}`));

}