const mongoose = require('mongoose');
const Message_Schema = mongoose.Schema({
identifer: {
    type: String,
    required: true
},
message:{
    type: String,
    required: true
}
});

const message = mongoose.model('message', Message_Schema);
module.exports = message;
