import React, { Component } from 'react'
import { connect } from 'react-redux'
import { movieRequest, scrollReqeuest } from "../store/modules/default";


import MovieList from '../components/MovieList'
import LeftHeader from './HeaderContainer'

export class Root extends Component {
    state = {
        toggle: false,
        page: 2
    }
    componentWillMount = () => {
        window.removeEventListener('scroll', this.handleOnScroll)
        this.props.movieRequest(1)
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleOnScroll)
    }

    // handle onScroll event
    handleOnScroll = async () => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const { page } = this.state
        const { status } = this.props
        const scrollTop =
            (document.documentElement && document.documentElement.scrollTop) ||
            document.body.scrollTop;

        if (scrollHeight - innerHeight - scrollTop < 1) {
            await this.setState({
                page: page + 1
            })
            await this.props.scrollReqeuest(status, page)
        }

    }


    movePage = (page) => {
        const { history } = this.props
        history.push(`/detail/${page.target.id}`)
    }

    render() {

        const { data, history } = this.props
        return (
            <div>
                <LeftHeader history={history} />
                <MovieList onScroll={this.handleOnScroll} data={data} movePage={this.movePage} />

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.def.data,
    status: state.def.status
})

const mapDispatchToProps = {
    movieRequest: (page) => movieRequest(page),
    scrollReqeuest: (status, page) => scrollReqeuest(status, page),
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)
