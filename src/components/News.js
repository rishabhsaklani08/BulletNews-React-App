import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>DevNews - Top Headlines</h2>
                <div className="row">
                    <div className="col md-4 my-3">
                        <NewsItems title="Newstitle" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>
                    <div className="col md-4 my-3">
                        <NewsItems title="Newstitle" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>
                    <div className="col md-4 my-3">
                        <NewsItems title="Newstitle" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>
                    <div className="col md-4 my-3">
                        <NewsItems title="Newstitle" description="Some quick example text to build on the card title and make up the bulk of the card's content." />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
