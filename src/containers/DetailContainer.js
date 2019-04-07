import React, { Component } from 'react'
import { connect } from 'react-redux'

import { detailReqeust, clear } from "../store/modules/detail";
import Detail from '../components/Detail'
import Loading from '../components/Loading'

export class DetailContainer extends Component {

    state = {
        wish: false,
        watch: false
    }


    componentWillMount = () => {
        const id = parseInt(this.props.match.params.id)
        this.props.detailReqeust(id)
        const wish = JSON.parse(localStorage.getItem("wish"));
        const watch = JSON.parse(localStorage.getItem("watch"));
        console.log(id, wish)
        if (wish) { //데이터 유효성 검사 
            if (id === wish) { //wishlist 하나만 있을 경우
                this.setState({
                    wish: true
                })
            }
            else if (typeof wish !== Number && typeof wish === Array) { //wishlist 여러개
                wish.find(el => parseInt(el) === id && !undefined ?
                    this.setState({
                        wish: true
                    })

                    :
                    this.setState({
                        wish: false
                    })
                )
            }
        }

        if (watch) {
            if (id === watch) {
                this.setState({
                    watch: true
                })
            }
            else if (typeof watch !== Number) {
                watch.find(el => parseInt(el) === id && !undefined ?
                    this.setState({
                        watch: true
                    })
                    :
                    this.setState({
                        watch: false
                    })
                )
            }
        }

    }

    componentWillUnmount() {
        this.props.clear()
    }
    wishClick = (data) => {
        const wish = JSON.parse(localStorage.getItem('wish'))
        console.log(wish)
        if (wish) {
            if (typeof wish === 'object') { //값이 두개 이상
                wish.push(data.target.id.toString())
                localStorage.setItem("wish", JSON.stringify(wish));
                this.setState({
                    wish: true
                })
            }
            else { //값이 없거나 하나 
                let newData = [wish.toString()]
                newData.push(data.target.id.toString())
                localStorage.setItem("wish", JSON.stringify(newData));
                this.setState({
                    wish: true
                })
            }

        }
        else {
            localStorage.setItem("wish", data.target.id.toString());
            this.setState({
                wish: true
            })
        }
    }

    watchClick = (data) => {
        const watch = JSON.parse(localStorage.getItem('watch'))
        if (watch) {
            if (typeof watch === 'object') { //값이 두개 이상
                watch.push(data.target.id.toString())
                localStorage.setItem("watch", JSON.stringify(watch));
                this.setState({
                    watch: true
                })
            }
            else { //값이 없거나 하나 
                let newData = [watch.toString()]
                newData.push(data.target.id.toString())
                localStorage.setItem("watch", JSON.stringify(newData));
                this.setState({
                    watch: true
                })
            }
        }
        else {
            localStorage.setItem("watch", data.target.id.toString());
            this.setState({
                watch: true
            })
        }
    }

    overlapCheck = () => {
        alert('you has add this movie')
    }

    render() {
        const { wish, watch } = this.state
        const { data, status } = this.props;
        if (data && status) {
            return (
                <div>
                    <Detail
                        key={data.id}
                        data={data}
                        wishClick={this.wishClick}
                        watchClick={this.watchClick}
                        overlap={this.overlapCheck}
                        wish={wish}
                        watch={watch}
                    />
                </div>
            )
        }
        else {
            return (
                <div>
                    <Loading />
                </div>
            )
        }
    }
}


const mapStateToProps = (state) => ({
    data: state.detail.data,
    status: state.detail.status
})

const mapDispatchToProps = {
    detailReqeust: (id) => detailReqeust(id),
    clear: () => clear()
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailContainer)
