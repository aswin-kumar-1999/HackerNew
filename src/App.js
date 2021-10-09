import React, { Component } from 'react'
import Header from './component/Header'
import style from './App.module.css'

export class App extends Component {
  render() {
    return (
      <div className={style.layout} >
        <div className={style["layout-container"]}>
          <Header />
        </div>
      </div>
    )
  }
}

export default App
