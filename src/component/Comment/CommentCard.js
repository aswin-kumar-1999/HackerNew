import React, { Component } from 'react'
import style from './CommentCards.module.css'
import Comment from './Comment'

export class CommentCard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={style.comment}>
                <div className={style.author}> {this.props.by}</div>
                <div className={style.message} dangerouslySetInnerHTML={{__html:this.props.text}}></div>
                <div className={style["inner-comment"]}>
                    {this.props.commentIds !== undefined && <Comment comment={this.props.commentIds} />}
                </div>
            </div>
        )
    }
}

export default CommentCard
