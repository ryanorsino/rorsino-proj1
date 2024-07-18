document.addEventListener('DOMContentLoaded', function() {
    function goToMaristEdu() {
        goToLocation('http://my.marist.edu');
    }

    document.getElementById('portal_button').addEventListener('click', goToMaristEdu);

    document.getElementById('portal_button_text').addEventListener('click', goToMaristEdu);
});

let currentStories = [];

    currentStories.push({
        Title: 'Views around Marist!',
        Body: 'Look at our GORGEOUS campus!',
        linkUrl: 'https://example.com/story1',
        imageUrl: 'images/campus.png'
    });

    currentStories.push({
        Title: 'The OFFICIAL Marist Paper!',
        Body: 'Keep up to date with all things Marist!',
        linkUrl: 'https://example.com/story2',
        imageUrl: 'images/news_pic.jpg'
    });

    currentStories.push({
        Title: 'Building Information!',
        Body: "What's new with the Hancock Center?",
        linkUrl: 'https://example.com/story3',
        imageUrl: 'images/hancock.jpeg'
    });

    function displayItem(feedItem) {
        let newsfeedElement = document.getElementById('newsfeed');
        
        let itemHTML = `
            <div class="feed-item">
                <h2 id="titles"><a href="${feedItem.linkUrl}" target="_blank">${feedItem.Title}</a></h2>
                <p id="body2">${feedItem.Body}</p>
                <a href="${feedItem.linkUrl}" target="_blank">
                    <img src="${feedItem.imageUrl}" alt="${feedItem.Title}" style="max-width: 20%; height: 20%;">
                </a>
            </div>
        `;
        
        newsfeedElement.innerHTML += itemHTML;
    }

    currentStories.forEach(function(item) {
        displayItem(item);
    });