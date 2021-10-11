import React, { Component } from 'react'

import CommentCard from './CommentCard'

import { getCommentPage } from '../../API/api'

class Comment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            isLoading: true,
        }
        this.commentArray = [];
    }

    componentDidMount() {

        if (this.props.comment !== undefined) {
            this.props.comment.map((id) =>
                getCommentPage(id)
                    .then(data => {
                        this.setState((prevState) => ({ data: [...prevState.data, data], isLoading: false }))
                    })
                    .catch(err => {
                        console.log("ERROR", err)
                    })
            )
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <div className="loader"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
                {!this.state.isLoading && this.state.data.map((data, index) => (
                    <CommentCard by={data.by} id={data.id} commentIds={data.kids} text={data.text} key={index} />
                ))}
                {/* {this.state.dataLength === 0 && !this.state.isLoading && <div>Something went wrong </div>} */}
            </div>
        )
    }
}

export default Comment
