const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name: String,
    image: String,
    price: String,
    description: String,
    location: String,
    lat: Number,
    lng: Number,
    review: String,
    username: String,
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Listing', listingSchema);