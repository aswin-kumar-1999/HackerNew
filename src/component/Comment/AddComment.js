import React, { Component } from 'react'
import style from '../NewsPost/NewsCard.module.css'
import { getNews } from '.././../API/api'

class AddComment extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        getNews(this.props.parent)
            .then(data => {
                return data.data
            })
            .then(data => {
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

    render() {
        return (
            <React.Fragment>
                {this.state.isDataLoaded
                    &&
                    <div className={style.newBlog}>
                        <div className={style.innerBlog}>
                            <span>
                                <a href={this.state.url} className={style.link} >{this.state.title}</a>
                                <span > &nbsp;&nbsp; ({this.state.host})</span>
                            </span>
                            <div>
                                {`${this.state.score} points by ${this.state.by}`} |
                                <span > {this.state.comment ? this.state.comment.length : 0} comments </span>
                            </div>
                        </div>
                    </div>
                }
                <textarea rows="4" cols="50" name="comment" form="usrform" defaultValue='Enter comment here...'>      
                </textarea>
            </React.Fragment>
        )
    }
}

export default AddComment
