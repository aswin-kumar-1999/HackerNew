import React, { Component } from 'react'
import style from './App.module.css'

import Header from './component/Header'
import NewsPost from './component/NewsPost'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      searchNews:'topstories'
    }
  }
  
  newsTagHandler=(tag)=>{
    this.setState({searchNews:tag})
  }

  render() {
    return (
      <div className={style.layout} >
        <div className={style["layout-container"]}>
          <Header newsTag={this.newsTagHandler}/>
          <NewsPost  searchNews={this.state.searchNews}/>
        </div>
      </div>
    )
  }
}

export default App
