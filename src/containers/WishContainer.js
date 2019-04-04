import React, { Component } from 'react'

import Wish from '../components/Wish'
import Axios from 'axios';

export class WishContainer extends Component {
    state = {
        wish: null
    }

    componentWillMount = () => {
        let newData = []
        const wish_Local = JSON.parse(localStorage.getItem("wish"))
        if (wish_Local) {
            wish_Local.map(res =>
                Axios.get(`https://yts.am/api/v2/movie_details.json?movie_id=${res}`)
                    .then(req => {
                        newData.push(req.data.data.movie)
                        this.setState({
                            wish: newData
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
        const { wish } = this.state
        console.log(wish)
        return (
            <div>
                <Wish wish={wish} movePage={this.showDetail} />
            </div>
        )
    }
}


export default WishContainer
