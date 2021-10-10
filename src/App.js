import React, { Component } from 'react'
import style from './App.module.css'

import Header from './component/Header'
import NewsPost from './component/NewsPost/NewsPost'
import Comment from './component/Comment/Comment'
import Card from './component/UI/Card'
import AddComment from './component/Comment/AddComment'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchNews: 'topstories',
      commentId: [],
      isComment: false,
      parent: ''
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState !== this.state.searchNews) {
      return true
    }
    else {
      return false
    }
  }

  newsTagHandler = (tag) => {
    this.setState({ searchNews: tag })
    // console.log(tag)
  }

  commentHandler = ({ comment, parent }) => {
    this.setState({ commentId: comment, isComment: true, parent })
  }

  render() {
    return (
      <div className={style.layout} >
        <div className={style["layout-container"]}>
          <Header newsTag={this.newsTagHandler} />
          {!this.state.isComment && <NewsPost searchNews={this.state.searchNews} onComment={this.commentHandler} />}
          {this.state.isComment &&
            <Card>
              <AddComment parent={this.state.parent} />
              <Comment comment={this.state.commentId} />
            </Card>
          }
        </div>
      </div>
    )
  }
}

export default App
