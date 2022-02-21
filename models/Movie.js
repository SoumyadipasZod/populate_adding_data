const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    movieName: {
        type: String,
        required: true
    },
    actors: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    }
})

const MovieModel = new mongoose.model("movie", MovieSchema);
module.exports = MovieModel;