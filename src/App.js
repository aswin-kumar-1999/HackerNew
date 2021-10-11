import React, { Component } from 'react'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import style from './App.module.css'

import Header from './component/Header'
import NewsPost from './component/NewsPost/NewsPost'
import Comment from './component/Comment/Comment'
import Card from './component/UI/Card'
import AddComment from './component/Comment/AddComment'
import User from './component/User/User'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchNews: 'topstories',
      commentId: [],
      isComment: false,
      parent: '',
      user: ''
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
    console.log(tag)
  }

  commentHandler = ({ comment, parent }) => {
    this.setState({ commentId: comment, isComment: true, parent })
  }
  userHandler = (user) => {
    this.setState({ user })
  }
  render() {
    return (
      <div className={style.layout} >
        <div className={style["layout-container"]}>
          <Header newsTag={this.newsTagHandler} />
          <BrowserRouter>
            <Route >
              <Redirect to={'/hackerNews/' + this.state.searchNews} />
            </Route>
            <Route path={'/hackerNews/' + this.state.searchNews} exact>
              {!this.state.isComment && !this.state.user &&
                <NewsPost
                  searchNews={this.state.searchNews}
                  onComment={this.commentHandler}
                  onUser={this.userHandler}
                />
              }
            </Route>
          </BrowserRouter>

          {this.state.isComment &&
            <Card>
              <AddComment parent={this.state.parent} />
              <Comment comment={this.state.commentId} />
            </Card>
          }
          {this.state.user && <User user={this.state.user} />}
        </div>
      </div>
    )
  }
}

export default App
