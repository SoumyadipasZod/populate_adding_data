const router = require("express").Router();
const WebController = require("../controllers/WebController");

router.get("/", WebController.index);
router.get("/show-add-movies", WebController.showAddMovies);
router.post("/add-movies", WebController.addMovies);
router.get("/show-add-users", WebController.showAddUsers);
router.post("/add-users", WebController.addUsers);
router.get("/show-add-reviews", WebController.showAddReviews);
router.post("/add-reviews", WebController.addReviews);
module.exports = router;