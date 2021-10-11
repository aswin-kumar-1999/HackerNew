import React, { Component } from 'react'
import { getUserPage } from '../../API/api'
import Card from '../UI/Card'
import NewsCard from '../NewsPost/NewsCard'
import style from './User.module.css'

export class User extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            loadSubmission: false,
            submission: []
        }
    }

    componentDidMount() {
        getUserPage(this.props.user)
            .then(data => {
                this.setState({ about: data.about, id: data.id, karma: data.karma, submission: data.submitted, time: data.created })
                console.log("Data", data)
                this.setState({ isLoading: false })
            })
    }

    submissionHandler = () => {
        this.setState({ loadSubmission: true, isLoading: true })
    }
    loadHandler = (loading) => {
        this.setState({ isLoading: loading })
    }

    errorHandler = (err) => {
        console.log(err);
        this.setState({ err, isLoading: false })
    }
    render() {
        return (
            <Card>
                {!this.state.isLoading && !this.state.loadSubmission &&
                    <div>
                        <div className={style["user-layout"]}>

                            <div className={style.tag}>
                                user: <br />created: <br />Karma:<br />about:

                            </div>
                            <div className={style.info}>
                                {this.state.id}<br />
                                {this.state.time}<br />
                                {this.state.karma}<br />
                                <span dangerouslySetInnerHTML={{ __html: this.state.about }} />
                            </div>
                        </div>
                        <div className={style.links}>
                            <div onClick={this.submissionHandler}>submission</div>
                            <div>comment</div>
                            <div>favorites</div>
                        </div>
                    </div>
                }
                {this.state.isLoading && <div className="loader"><div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>}
                {this.state.loadSubmission && console.log(this.state.submission)}
                {this.state.loadSubmission && this.state.submission.map((data, index) => (
                   <NewsCard
                        key={index}
                        data={data}
                        index={''}
                        onLoading={this.loadHandler}
                        onError={this.errorHandler}
                        onComment={this.props.onComment}
                        onUserDetail={this.props.onUser}
                    />
                ))}
            </Card>
        )
    }
}

export default User
