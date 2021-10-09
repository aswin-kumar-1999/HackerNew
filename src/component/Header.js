import React, { Component } from 'react'
import style from './Header.module.css'
class Header extends Component {
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
                            <span>new </span> &nbsp; | &nbsp;
                            <span> past</span> &nbsp;|&nbsp;
                            <span> comment</span> &nbsp;|&nbsp;
                            <span> ask</span> &nbsp;|&nbsp;
                            <span> show</span>&nbsp; |&nbsp;
                            <span> jobs</span> &nbsp;|&nbsp;
                            <span> submit</span>
                        </div>
                    </div>
                    <div >login</div>
                </div>

            </div>
        )
    }
}

export default Header
