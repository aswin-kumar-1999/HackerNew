import React, { Component } from 'react'
import style from './Header.module.css'
class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className={style.header}>
                <div>
                    <div className={style.logo}>Y</div>
                </div>

                <div className={style.title}>
                    <div>
                        <h4>Hacker News</h4>
                        <div className={style.navLink}>
                            &nbsp;&nbsp;&nbsp;
                            <span onClick={() => { this.props.newsTag("newstories") }} >new </span> &nbsp; | &nbsp;
                            <span onClick={() => { this.props.newsTag("newstories") }} > past</span> &nbsp;|&nbsp;
                            <span onClick={() => { this.props.newsTag("beststories") }}> best</span> &nbsp;|&nbsp;
                            <span onClick={() => { this.props.newsTag("askstories") }} > ask</span> &nbsp;|&nbsp;
                            <span onClick={() => { this.props.newsTag("showstories") }}> show</span>&nbsp; |&nbsp;
                            <span onClick={() => { this.props.newsTag("jobstories") }}> jobs</span> &nbsp;|&nbsp;
                            <span > submit</span>
                        </div>
                    </div>
                    <div >login</div>
                </div>

            </div >
        )
    }
}

export default Header
