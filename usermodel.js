const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost3000/mongopractise`)
const userSchema =mongoose.Schema({
    name: String,
     username: String,
     email: String   
})
module.exports = mongoose.model("user",userSchema);