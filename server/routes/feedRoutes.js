// express imported
const express = require ('express');
// router object
const router = express.Router( );

// feedController feedItems import
let feedController = require("../controller/feedController");
let feedItem = require("../model/feedItems");

router.route("/")
    .get(feedItem.getFeeds)
    .post(feedController.saveFeed);

router.route("/:feedId")
    .get(feedController.getFeed)
    .delete(feedController.deleteFeed)
    .patch(feedController.updateFeed)

module.exports = router;