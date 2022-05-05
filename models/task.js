const mongoose = require('mongoose');
const Schema = mongoose.Schema;



var taskSchema = new Schema({
    catagory: String,
    details: String,
    price: Number,
    date: Date,
    isCompleted: Boolean,
    completedBy: {type: Schema.Types.ObjectId, ref: 'User'},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'}
 }, {
     timestamps: true
 }
 )

 module.exports = mongoose.model('Task', taskSchema);