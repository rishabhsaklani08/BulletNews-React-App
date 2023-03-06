import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
