import React, { Component } from 'react'
import Axios from 'axios';
import Chart from '../components/Chart'
import Wish from '../components/Wish'

export class WishContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            wish: null,
            data: []

        }
    }

    componentWillMount = () => {
        let newData = []
        const wish_Local = JSON.parse(localStorage.getItem("wish"))
        if (wish_Local) {
            wish_Local.forEach((res, index, array) => {
                Axios.get(`https://yts.am/api/v2/movie_details.json?movie_id=${res}`)
                    .then(req => {
                        newData.push(req.data.data.movie)

                        this.setState({
                            wish: newData
                        })

                        if (array.length === newData.length) {
                            this.chartData()
                        }

                    })
            })

        }
    }

    chartData = () => {
        let chart = []
        let predata = []

        let { wish } = this.state
        if (wish) {
            Object.keys(wish).forEach(res => {  //데이터 가지고 오기
                wish[res].genres.length >= 2 ? wish[res].genres.map(res => chart.push(res)) : chart.push(wish[res].genres[0])
            }); // make chart predata
        }

        chart.forEach((res, index, array) => {  //데이터 초기 세팅
            predata.push({ name: res, value: 1 })
        })

        predata.forEach((el, index, array) => {  //predata의 중복 체크
            predata.forEach((res, resindex = index, resarray = array) => {
                if (resindex !== index && el.name === res.name) {
                    predata[index].value = predata[index].value + 1
                    predata.splice(resindex, 1)
                }
            })
        })

        predata.sort((a, b) =>    //내림 차순으로 정ㄹㄹ
            b.value - a.value
        )

        this.setState({
            data: predata
        })
    }



    showDetail = (data) => {
        const { history } = this.props
        history.push(`/detail/${data.target.id}`)
    }

    render() {
        const { wish, data } = this.state

        return (

            <div>
                <Chart data={data} />
                <Wish wish={wish} movePage={this.showDetail} />
            </div >
        )
    }
}




export default WishContainer
