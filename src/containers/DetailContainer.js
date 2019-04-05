import React, { Component } from 'react'
import { connect } from 'react-redux'

import { detailReqeust, clear } from "../store/modules/detail";
import Detail from '../components/Detail'
import Loading from '../components/Loading'

export class DetailContainer extends Component {
    componentWillMount = () => {
        this.props.detailReqeust(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.clear()
    }
    //중복 체크 x
    wishClick = (data) => {
        console.log(data.target)
        if (localStorage.getItem('wish')) {
            let Local = JSON.parse(localStorage.getItem("wish"))
            if (typeof Local === 'object') { //값이 두개 이상
                Local.push(data.target.id.toString())
                localStorage.setItem("wish", JSON.stringify(Local));
            }
            else { //값이 없거나 하나 
                let newData = [Local.toString()]
                newData.push(data.target.id.toString())
                localStorage.setItem("wish", JSON.stringify(newData));
            }
        }
        else {
            localStorage.setItem("wish", data.target.id.toString());
        }
    }

    watchClick = (data) => {
        if (localStorage.getItem('watch')) {
            let Local = JSON.parse(localStorage.getItem("watch"))
            if (typeof Local === 'object') { //값이 두개 이상
                Local.push(data.target.id.toString())
                localStorage.setItem("watch", JSON.stringify(Local));
            }
            else { //값이 없거나 하나 
                let newData = [Local.toString()]
                newData.push(data.target.id.toString())
                localStorage.setItem("watch", JSON.stringify(newData));
            }
        }
        else {
            localStorage.setItem("watch", data.target.id.toString());
        }
    }


    render() {
        const { data, status } = this.props;
        if (data && status) {
            return (
                <div>
                    <Detail key={data.id} data={data} wishClick={this.wishClick} watchClick={this.watchClick} />
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
