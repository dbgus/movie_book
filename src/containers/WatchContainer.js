import React, { Component } from 'react'

import Watch from '../components/Watch'
import Axios from 'axios';

export class WatchContainer extends Component {
    state = {
        watch: null
    }

    componentWillMount = () => {
        let newData = []
        const watch_Local = JSON.parse(localStorage.getItem("watch"))
        if (watch_Local) {
            watch_Local.map(res =>
                Axios.get(`https://yts.am/api/v2/movie_details.json?movie_id=${res}`)
                    .then(req => {
                        newData.push(req.data.data.movie)
                        this.setState({
                            watch: newData
                        })
                    })
            )
        }

    }
    showDetail = (data) => {
        const { history } = this.props
        history.push(`/detail/${data.target.id}`)
    }

    render() {
        const { watch } = this.state

        return (
            <div>
                <Watch watch={watch} movePage={this.showDetail} />
            </div>
        )
    }
}


export default WatchContainer
