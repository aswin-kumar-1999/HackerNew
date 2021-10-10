import React, { Component } from 'react'
import { getPage } from '../../API/api'
import style from './NewPost.module.css'
import NewsCard from './NewsCard'
import Card from '../UI/Card'
class NewsPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newsId: [],
            err: false,
            listDown: 1,
            chunk: [],
            isLoading: true
        }
    }

    componentDidMount() {
        console.log('mount')
        this.setState({ isLoading: true })
        getPage(this.props.searchNews)
            .then((data) => {
                this.setState({
                    newsId: data.data,
                    chunk: data.data.slice(0, 30)
                })
            })
            .catch(err => {
                this.setState({ err: "No details found", isLoading: false })
            })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.searchNews !== this.props.searchNews) {
            this.setState({ isLoading: true })
            getPage(this.props.searchNews)
                .then((data) => {
                    console.log(data)
                    this.setState(
                        {
                            newsId: data.data,
                            chunk: data.data.slice(0, 30),
                            listDown: 1
                        })
                })
                .catch(err => {
                    console.log("assd", err);
                    this.setState({ err: "No details found", isLoading: false })
                })
        }
    }

    chunkHandler = () => {
        console.log("asd")
        if (this.state.listDown <= this.state.newsId.length) {
            this.setState(prevState => ({
                listDown: prevState.listDown + 30,
                chunk: prevState.newsId.slice(prevState.listDown, prevState.listDown + 30),
                isLoading: true
            }))
        }
        else {
            this.setState({ listDown: 0 })
        }
    }

    loadHandler = (loading) => {
        this.setState({ isLoading: loading })
    }

    errorHandler = (err) => {
        console.log(err);
        this.setState({ err, isLoading: false })
    }
    render() {
        return (
            // <div className={style.newsPost}>
            <Card >
                <div>
                    {this.state.chunk && this.state.chunk.map((data, index) => (
                        <NewsCard
                            key={index}
                            data={data}
                            index={this.state.listDown + index}
                            onLoading={this.loadHandler}
                            onError={this.errorHandler}
                            onComment={this.props.onComment}
                            onUserDetail={this.props.onUser}
                        />
                    ))}
                </div>
                {!this.state.isLoading && !this.state.err && this.state.listDown !== 0 && <div className={style.more} onClick={this.chunkHandler}>More</div>}
                {!this.state.isLoading && <div className={style.hrLine}></div>}
                {this.state.isLoading && <div className="loader"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
                {this.state.err && <div className={style.error}>{this.state.err}</div>}
                {/* </div> */}
            </Card>
        )
    }
}

export default NewsPost