var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter he naem of test'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum : ['pending','ongoing','completed'],
        default: 'pending'
    }
})

module.exports = mongoose.model('Tasks', TaskSchema);