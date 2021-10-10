import React, { Component } from 'react'
import style from './NewsCard.module.css'
import { getNews } from '../../API/api'
class NewsPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: '',
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
            .then(() => {
                this.props.onLoading(false)
            })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            getNews(this.props.data)
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
                .then(() => {
                    this.props.onLoading(false)
                })
                .catch((err) => {
                    console.log(err);
                    this.props.onError("Something went wrong")
                })
        }
    }

    // fetchPage=()=>{
    //     this.props.onLoading(true)
    //     getNewsLink(this.state.url)
    //     .then(data=>{
    //         this.props.onLoading(true)
    //         console.log("data",data)
    //         this.setState({isDataLoaded:false,reDirectPage:data})
    //     })
    //     .catch(err=>{
    //         this.setState({isDataLoaded:false,reDirectPage:err})
    //     })
    // }

    handleComments = () => {
        console.log("comment")
        this.props.onComment({comment:this.state.comment,parent:this.props.data})
    }

    hideHandler = () => {
        this.setState({ isDataLoaded: false })
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
                                {`${this.state.score} points by ${this.state.by}`} |
                                <span onClick={this.hideHandler} className={style.btn}> hide </span>|
                                <span onClick={this.handleComments} className={style.btn}> ${this.state.comment ? this.state.comment.length : 0} comments </span>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default NewsPage
