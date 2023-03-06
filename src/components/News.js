import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sarah Perez",
            "title": "Medium launches a 'premium' Mastodon instance as a membership perk",
            "description": "Publishing platform Medium is opening up its debut Mastodon instance, me.dm, to its members, the company announced today. Last month, Medium first teased its plans around the Fediverse — the group of interconnected servers powering a range of open source, dec…",
            "url": "https://techcrunch.com/2023/03/06/medium-launches-a-premium-mastodon-instance-as-a-membership-perk/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2018/05/photo-11-05-2018-00-41-31.jpg?resize=1200,640",
            "publishedAt": "2023-03-06T18:49:56Z",
            "content": "Publishing platform Medium is opening up its debut Mastodon instance, me.dm, to its members, the company announced today.\r\nLast month, Medium first teased its plans around the Fediverse — the group o… [+7298 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Frederic Lardinois",
            "title": "Honeycomb's yoke and throttle let you take your flight sim experience to the next level",
            "description": "We go hands-on with Honeycomb's Alpha XPC rudder and Bravo throttle setup that lets you take your flight sim experience to new levels.",
            "url": "https://techcrunch.com/2023/03/06/honeycomb-alpha-flight-control-xpc-yoke-and-bravo-throttle-take-flight-sim-review-pc-xbox/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/Honeycomb_yoke_throttle-2.jpg?resize=1200,846",
            "publishedAt": "2023-03-06T18:37:29Z",
            "content": "When Microsoft, after a decade-long hiatus, relaunched its now 40-year-old Flight Simulator series in 2020, it reignited interest in a genre that had long been a mainstay of PC gaming. It’s one thing… [+7135 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Natasha Mascarenhas",
            "title": "Vinod Khosla’s advice for top VCs? Don’t sit on your founders’ boards",
            "description": "Serial entrepreneur and seasoned investor Vinod Khosla has some strong, contrarian advice for the venture capital industry.",
            "url": "https://techcrunch.com/2023/03/06/vinod-khoslas-advice-for-top-vcs-dont-sit-on-your-founders-boards/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/Khosla-Zhang-8.jpg?resize=1200,800",
            "publishedAt": "2023-03-06T18:27:34Z",
            "content": "Serial entrepreneur and seasoned investor Vinod Khosla has some strong, contrarian advice for the venture capital industry: dont sit on your founders boards. Khosla, who spoke on stage at the Upfront… [+3500 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "Twitter images and links are currently broken",
            "description": "Twitter is experiencing issues once again.",
            "url": "https://techcrunch.com/2023/03/06/twitter-images-and-links-are-currently-broken/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2022/11/twitter-melting.jpg?resize=1200,645",
            "publishedAt": "2023-03-06T17:20:42Z",
            "content": "Twitter is experiencing issues once again. Multiple users, including folks on the TechCrunch team, are currently unable to view links and images on the social network. According to reports on third-p… [+964 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ron Miller",
            "title": "Qualtrics has $12B offer on the table to go private",
            "description": "Reports are stating the Silver Lake and the Canadian Pension Fund are taking Qualtrics private in a $12B deal.",
            "url": "https://techcrunch.com/2023/03/06/qualtrics-has-12b-offer-on-the-table-to-go-private/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/GettyImages-1230547013.jpg",
            "publishedAt": "2023-03-06T17:17:15Z",
            "content": "Qualtrics was once a hot startup before SAP bought the company in 2018 for $8 billion. It was a fine exit, making the founders rich, but it never was really a good fit. SAP spun out the company just … [+3065 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Szkutak",
            "title": "Tweet, tweet, pass: Twitter unlocks a budding growth opportunity for cannabis startups",
            "description": "Twitter is the first of the major social media companies to allow cannabis companies to advertise.",
            "url": "https://techcrunch.com/2023/03/06/cannabis-startups-twitter-advertising/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/IMG_4455.jpg?resize=1200,645",
            "publishedAt": "2023-03-06T16:37:42Z",
            "content": "Cannabis startups have to navigate some rough waters: They cant access federal funds or work with traditional banks, and they have to find customers across a fragmented market while adhering to local… [+773 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Alex Wilhelm",
            "title": "Valuation pressure on software startups is easing",
            "description": "When it comes to startup valuations, no one seems to expect things to go back to 2021. But better? Who doesn't love that?",
            "url": "https://techcrunch.com/2023/03/06/valuation-pressure-on-software-startups-is-easing/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/05/NSussman_Techcrunch_Exchange_v3-GRN.jpg?resize=1200,900",
            "publishedAt": "2023-03-06T15:39:37Z",
            "content": "Are you tired of bad news for startups? Bored of the layoffs, budget cuts, and sermons from folks who suddenly discovered the efficiency gospel?\r\nWell, how about some good news? I have some for you: … [+1434 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ivan Mehta",
            "title": "SoundCloud is testing a TikTok-like feed for music discovery",
            "description": "Soundcloud is testing a TikTok like vertical feed on its apps to let users listen to 30-second clips of songs.",
            "url": "https://techcrunch.com/2023/03/06/soundcloud-is-testing-a-tiktok-like-feed-for-music-discovery/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/03/Soundclod-feed.jpg?resize=1200,675",
            "publishedAt": "2023-03-06T10:26:09Z",
            "content": "A lot of music streaming services and discovery apps have followed a formula for introducing new artists and songs to their users: an AI-powered vertical feed that highlights clips of songs. SoundClo… [+2836 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Rebecca Bellan",
            "title": "Tesla slashes prices for Model S and Model Y in US",
            "description": "In its second cost cutting measure of 2023, Tesla slashed Model S and Model Y prices in the U.S. by $5,000 and $10,000, respectively.",
            "url": "https://techcrunch.com/2023/03/05/tesla-slashes-prices-for-model-s-and-model-y-in-us/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-06-at-2.58.51-PM-e1662509071979.png?resize=1200,745",
            "publishedAt": "2023-03-06T04:47:27Z",
            "content": "Tesla has cut the prices of its Model S sedan and Model X SUV in the U.S., according to the company’s website. This is the second time this year that Tesla has slashed prices, and it might be a bid t… [+961 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Maggie Stamets",
            "title": "Inside Startup Battlefield: Say Hello to the Startup Battlefield Winner",
            "description": "In this episode, we get to know the winner of the 2022 Startup Battlefield competition.",
            "url": "https://techcrunch.com/2023/03/06/inside-startup-battlefield-say-hello-to-the-startup-battlefield-winner/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/02/inside-startup-battlefield-featured2.jpg?resize=1200,675",
            "publishedAt": "2023-03-03T19:54:04Z",
            "content": "Welcome to the final episode of Inside Startup Battlefield. Thank you so much for listening to our miniseries all about TechCrunch’s pitch competition. Now, its the moment weve all been waiting for t… [+480 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>DevNews - Top Headlines</h2>
                <div className="row">
                    <div className="col md-4 my-3">
                        <NewsItems title="Newstitle" description="Some quick example text to build on the card title and make up the bulk of the card's content." imageURL="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_Angular_Developer.jpg" />
                    </div>
                    <div className="col md-4 my-3">
                        <NewsItems title="Newstitle" description="Some quick example text to build on the card title and make up the bulk of the card's content." imageURL="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_Angular_Developer.jpg" />
                    </div>
                    <div className="col md-4 my-3">
                        <NewsItems title="Newstitle" description="Some quick example text to build on the card title and make up the bulk of the card's content." imageURL="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_Angular_Developer.jpg" />
                    </div>
                    <div className="col md-4 my-3">
                        <NewsItems title="Newstitle" description="Some quick example text to build on the card title and make up the bulk of the card's content." imageURL="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_Angular_Developer.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
