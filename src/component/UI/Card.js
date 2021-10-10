import React, { Component } from 'react'
import style from './Cards.module.css'
export class Card extends Component {
    render() {
        return (
            <div className={style.layout}>
                {this.props.children}
            </div>
        )
    }
}

export default Card
