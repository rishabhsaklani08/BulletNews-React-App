import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

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
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c7c88e71edb04269b4a8480ec3003e6a&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ laoding: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    }

    handlePrevclick = async () => {
        let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c7c88e71edb04269b4a8480ec3003e6a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ laoding: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextclick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
            let url = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=c7c88e71edb04269b4a8480ec3003e6a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ laoding: true });
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className="text-center">DevNews - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {this.state.loading && this.state.articles.map((element) => {
                        return <div className="col md-4 my-3" key={element.url}>
                            <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-danger" onClick={this.handlePrevclick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-danger" onClick={this.handleNextclick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
