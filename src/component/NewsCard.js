import React, { Component } from 'react'

import { getNews } from '../API/api'
class NewsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isDataLoaded: false
        }
    }

    componentDidMount() {
        getNews(this.props.data)
            .then(data => {
                return data.data
            })
            .then(data => {
                console.log("comment", data.kids ? data.kids.length : 0)
                this.setState({
                    by: data.by,
                    id: data.id,
                    comment: data.kids,
                    score: data.score,
                    title: data.title,
                    time: data.time,
                    type: data.type,
                    url: data.url,
                    isDataLoaded: true
                })
            })
    }


    render() {
        return (
            <React.Fragment>
                {this.state.isDataLoaded && <div>
                    {this.props.index}.
                    <span>
                        <a href={this.state.url} >{this.state.title}</a>
                        <span >{this.state.host}</span>
                    </span>
                    <div>
                        {`${this.state.score} points by ${this.state.by} | hide | ${this.state.comment ? this.state.comment.length : 0} comments`}
                    </div>
                </div>
                }
            </React.Fragment>
        )
    }
}

export default NewsPage
