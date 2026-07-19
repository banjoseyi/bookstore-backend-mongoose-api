const mongoose = require("mongoose");

// const reviewSchema = new mongoose.Schema({
//     name: String,
//     body: String
// });

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    pages: Number,
    rating: Number,
    genres: [String],
    reviews: [{
        name: String,
        body: String
    }]
});

module.exports = mongoose.model("book", bookSchema)
