import React, { Component } from 'react'
import Left from '../components/LeftHeader'

export class HeaderContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            toggle: false
        }
    }

    MenuBtn = () => {
        const { toggle } = this.state
        this.setState({
            toggle: !toggle
        });
    }
    HeadermovePage = (page) => {
        const { history } = this.props
        history.push(`/${page.target.id}`)
    }
    render() {
        return (
            <div>
                <Left Toggle={this.MenuBtn} move={this.HeadermovePage} status={this.state.toggle} />
            </div>
        )
    }
}

export default HeaderContainer
