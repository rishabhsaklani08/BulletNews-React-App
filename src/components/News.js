import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = 'https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c7c88e71edb04269b4a8480ec3003e6a&page=1&pageSize=20';
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
    }

    handlePrevclick = async () => {
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c7c88e71edb04269b4a8480ec3003e6a&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextclick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c7c88e71edb04269b4a8480ec3003e6a&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>DevNews - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col md-4 my-3" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevclick}> &larr; Previous</button>
                    <button type="button" className="btn btn-danger" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
