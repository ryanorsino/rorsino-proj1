const express = require('express')
const app = express();
const bodyParser = require('body-parser');
app.use(express.static('client/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

var currentStories = require('./controller/feedController');

app.use(bodyParser.json({type: 'application/json'}));

app.route('/api/feedItem')
    .get(currentStories.getFeeds)
    .post(currentStories.saveFeed)

app.route('/api/feedItem/:feedId')
    .get(currentStories.getFeed)
    .delete(currentStories.deleteFeed)
    .patch(currentStories.updateFeed)

app.listen(1337, () => console.log('Listening on port 1337.'))
