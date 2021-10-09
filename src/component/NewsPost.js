import React, { Component } from 'react'
import { getPage } from '../API/api'
import style from './NewPost.module.css'
import NewsCard from './NewsCard'

class NewsPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newsId: [],
            err: '',
            listDown: 1,
            chunk: []
        }
    }

    componentDidMount() {
        console.log('mount')
        getPage(this.props.searchNews).then((data) => { this.setState({ newsId: data.data, chunk: data.data.slice(0, 30) }) })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.listDown !== this.state.listDown && prevState.listDown !== 0) {
            console.log("update")
            this.setState(prevState => ({
                chunk: prevState.newsId.slice(prevState.listDown, prevState.listDown + 30),
            }))
        }
    }

    chunkHandler = () => {
        console.log("asd")
        if (this.state.listDown <= this.state.newsId.length) {
            this.setState(prevState => ({
                listDown: prevState.listDown + 30
            }))
        }
        else {
            this.setState({ listDown: 0 })
        }
    }

    render() {
        return (
            <div className={style.newsPost}>
                <div>
                    {this.state.chunk && this.state.chunk.map((data, index) => (
                        <NewsCard key={this.state.listDown + index} data={data} index={this.state.listDown + index} />
                    ))}
                </div>
                {this.state.listDown !== 0 && <div className={style.more} onClick={this.chunkHandler}>More</div>}
                <div className={style.hrLine}></div>
            </div>
        )
    }
}

export default NewsPost