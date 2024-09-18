// Import the mongoose library, which provides a MongoDB object modeling tool designed to work in an asynchronous environment.
const mongoose = require('mongoose');

// Define a schema for a 'thing' document in MongoDB
const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: String, required: true }
});

// Create and export a model named 'thing' based on the 'thingSchema' schema
module.exports = mongoose.model('Thing', thingSchema);
