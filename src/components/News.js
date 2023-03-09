import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {
        console.log('cmd');
        let url = 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c7c88e71edb04269b4a8480ec3003e6a'
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>DevNews - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col md-4 my-3" key={element.url}>
                            <NewsItems title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
