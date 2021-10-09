import React, { Component } from 'react'
import style from './NewsCard.module.css'
import { getNews } from '../API/api'
class NewsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isDataLoaded: false
        }
        console.log("inside")

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
                    host: data.url !== undefined ? new URL(data.url).hostname : '',
                    isDataLoaded: true
                })
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            getNews(this.props.data)
                .then(data => {
                    return data.data
                })
                .then(data => {
                    console.log("comment", data.kids ? data.kids.length : 0)
                    console.log(data.url)
                    this.setState({
                        by: data.by,
                        id: data.id,
                        comment: data.kids,
                        score: data.score,
                        title: data.title,
                        time: data.time,
                        type: data.type,
                        url: data.url,
                        host: data.url !== undefined ? new URL(data.url).hostname : '',
                        isDataLoaded: true
                    })
                })
        }
    }

    render() {
        console.log("inside")
        return (
            <React.Fragment>
                {this.state.isDataLoaded
                    &&
                    <div className={style.newBlog}>
                        {this.props.index}.
                        <div className={style.innerBlog}>
                            <span>
                                <a href={this.state.url} className={style.link} >{this.state.title}</a>
                                <span > &nbsp;&nbsp; ({this.state.host})</span>
                            </span>
                            <div>
                                {`${this.state.score} points by ${this.state.by} | hide | ${this.state.comment ? this.state.comment.length : 0} comments`}
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default NewsPage
