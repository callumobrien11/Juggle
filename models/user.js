var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    name: String,
    bio: String,
    googleId: String
},{
    timestamps: true
}
)



module.exports = mongoose.model('User', userSchema);