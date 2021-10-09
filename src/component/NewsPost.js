import React, { Component } from 'react'
import { getPage } from '../API/api'

import NewsCard from './NewsCard'

class NewsPost extends Component {

    constructor(props) {
        super(props)

        this.state = {
            newsId: [],
            err: ''
        }
    }

    componentDidMount() {
        getPage(this.props.searchNews).then((data)=>{this.setState({newsId:data.data})})

    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.searchNews !== this.props.searchNews) {
    //         const { data, err } = getPage(prevProps.searchNews);
    //         console.log(data);
    //         this.setState({ data, err })
    //     }
    // }

    render() {
        return (
            <div>
                {console.log(this.state.newsId)}
                {this.state.newsId.map((data,index)=>(
                    <NewsCard key={index} data={data} index={index}/>
                ))}    
            </div>
        )
    }
}

export default NewsPost
