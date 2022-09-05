const mongoose = require('mongoose');

const LibrarySchema = new mongoose.Schema({
    bookTitle: {
        type: String,
        required: true,
    },
    read: {
        type: Boolean,
        required: true,
    },
    userId: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Book', LibrarySchema);