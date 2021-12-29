//require mongoose
const mongoose = require('mongoose');

//creating schema of stored card info
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    duedate: {
        type: Date   
    },
    priority: {
        type: String
    }
});

//Exporting the Task schema
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;