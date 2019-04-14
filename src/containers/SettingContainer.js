import React, { Component } from 'react'
import { connect } from 'react-redux'


import Setting from '../components/Setting';
import SettingDataBox from '../components/SettingDataBox';
import { SettingRequest } from "../store/modules/Setting";

export class SettingContainer extends Component {

    componentWillMount() {
        const wish = JSON.parse(localStorage.getItem('wish'))
        const watch = JSON.parse(localStorage.getItem('watch'));
        const { SettingRequest } = this.props
        SettingRequest(wish, 'wish')
        SettingRequest(watch, 'watch')

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
        const { wishStatus, wishData, watchStatus, watchData } = this.props
        return (
            <div>
                <Setting
                />
                <SettingDataBox
                    Status={wishStatus}
                    Data={wishData}
                    DeleteBtn={this.delete}
                />
                <SettingDataBox
                    Status={watchStatus}
                    Data={watchData}
                    DeleteBtn={this.delete}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    wishStatus: state.setting.wishStatus,
    watchStatus: state.setting.watchStatus,
    wishData: state.setting.wishData,
    watchData: state.setting.watchData
})

const mapDispatchToProps = {
    SettingRequest: (data, type) => SettingRequest(data, type)
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingContainer)
