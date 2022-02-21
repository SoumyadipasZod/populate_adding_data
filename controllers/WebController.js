const MovieModel = require("../models/Movie");
const ReviewModel = require("../models/Review");
const UserModel = require("../models/User");

exports.index = (req, res) => {
    ReviewModel.find().populate("user").populate("movie").exec((err, data) => {
        if (!err) {
            console.log(data);
            res.render("index", {
                title: "Home",
                displayData: data
            })
        }
    })
}

exports.showAddMovies = (req, res) => {
    res.render("add-movies", {
        title: "Add | Movies"
    });
}

exports.addMovies = (req, res) => {
    MovieModel({
        movieName: req.body.movie,
        actors: req.body.actor,
        director: req.body.director
    }).save().then(result => {
        console.log("Movie Added....");
        res.redirect("/show-add-movies");
    }).catch(error => {
        console.log(error);
    })
}

exports.showAddUsers = (req, res) => {
    MovieModel.find().then(result => {
        res.render('add-users', {
            title: "Add-User",
            movies: result
        })
    }).catch(error => {
        console.log(error);
    })
}

exports.addUsers = (req, res) => {
    UserModel({
        name: req.body.name,
        email: req.body.email,
        movie: req.body.movie
    }).save().then(result => {
        console.log(`User Added....`);
        res.redirect("/show-add-users");
    }).catch(error => {
        console.log(error);
    })
}

exports.showAddReviews = (req, res) => {
    UserModel.find().then(result1 => {
        MovieModel.find().then(result2 => {
            res.render('add-reviews', {
                title: "Add | Review",
                displayData1: result1,
                displayData2: result2
            })
        })
    })
}

exports.addReviews = (req, res) => {
    ReviewModel({
        user: req.body.user,
        movie: req.body.movie,
        review: req.body.review
    }).save().then(result => {
        console.log(`Review Added....`);
        res.redirect("/show-add-reviews");
    }).catch(error => {
        console.log(error);
    })
}