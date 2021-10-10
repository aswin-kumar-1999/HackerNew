import React, { Component } from 'react'
import style from './App.module.css'

import Header from './component/Header'
import NewsPost from './component/NewsPost/NewsPost'
import Comment from './component/Comment/Comment'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      searchNews:'topstories',
      commentId:[],
      isComment:false
    }
  }

  shouldComponentUpdate(nextProps,nextState){
    if(nextState !== this.state.searchNews){
      return true
    }
    else{
      return false
    }
  }
  
  newsTagHandler=(tag)=>{
    this.setState({searchNews:tag})
    // console.log(tag)
  }

  commentHandler=(commentId)=>{
    this.setState({commentId, isComment:true})
  }

  render() {
    return (
      <div className={style.layout} >
        <div className={style["layout-container"]}>
          <Header newsTag={this.newsTagHandler}/>
          {!this.state.isComment && <NewsPost  searchNews={this.state.searchNews} onComment={this.commentHandler}/>}
          {this.state.isComment && <Comment comment={this.state.commentId} />}
        </div>
      </div>
    )
  }
}

export default App
