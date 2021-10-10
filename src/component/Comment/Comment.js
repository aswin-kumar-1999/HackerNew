import React, { Component } from 'react'

import Card from '../UI/Card'
import CommentCard from './CommentCard'

import { getCommentPage } from '../../API/api'

class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data:[]
        }
        this.commentArray = [];
    }

    componentDidMount() {

        this.props.comment.map((id) =>
            getCommentPage(id).then(data => {
                this.setState((prevState)=>({data:[...prevState.data,data]}))
            })
        )
    }

    render() {
        return (
            <Card>
                {this.state.data.map((data, index) => (
                    <CommentCard by={data.by}  id={data.id} commentIds={data.kids} text={data.text}  key={index} />
                ))}
            </Card>
        )
    }
}

export default Comment
