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
        if (wish) { //데이터 유효성 검사
            if (typeof wish === 'number') {
                if (id === wish) { //wishlist 하나만 있을 경우
                    this.setState({
                        wish: true
                    })
                }
            }
            else {
                if (wish.find(el => parseInt(el) === id)) {
                    this.setState({
                        wish: true
                    })
                }
            }
        }

        if (watch) {
            if (typeof watch === 'number') {
                if (id === watch) {
                    this.setState({
                        watch: true
                    })
                }
            }
            else {
                if (watch.find(el => parseInt(el) === id)){
                    this.setState({
                        watch:true
                    })
                }
            }
        }

    }

    componentWillUnmount() {
        this.props.clear()
    }
    wishClick = (data) => {
        const wish = JSON.parse(localStorage.getItem('wish'))
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

    delete = (btn) => {
        let deleteCheck = window.confirm('do you want a remove this movie ?')
        const id = this.props.match.params.id
        const nameCheck = btn.target.name;
        const data = JSON.parse(localStorage.getItem(nameCheck))
        if (deleteCheck) {
            if (typeof data === 'string' || typeof data === 'number') {
                localStorage.removeItem(nameCheck);
                nameCheck === 'wish' ?
                    this.setState({
                        wish: false
                    })
                    :
                    this.setState({
                        watch: false
                    })
            }
            else {

                const newData = data.filter(el => el !== id)
                newData.length === 1 ? //newData의 갯수 체크
                    localStorage.setItem(nameCheck, JSON.parse(newData))
                    :
                    localStorage.setItem(nameCheck, JSON.stringify(newData))

                nameCheck === 'wish' ?
                    this.setState({
                        wish: false
                    })
                    :
                    this.setState({
                        watch: false
                    })
            }
        }
        else {

        }
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
                        deleteClick={this.delete}
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
