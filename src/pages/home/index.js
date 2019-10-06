import React, { Component } from 'react';
import { connect } from 'react-redux';
import DiscountHouse from './components/DiscountHouse';
import { actionCreators } from './store';
import {
    Banner,
    Content
} from './style';

class Home extends Component {
    render() {
        return (
            <>
                <Banner></Banner>
                <Content>
                    <DiscountHouse></DiscountHouse>
                </Content>
            </>
        )
    }

    componentDidMount() {
        this.props.getHomeData();
    }
}

const mapDispatchToProps = (dispatch) => ({
    getHomeData() {
        dispatch(actionCreators.getHomeDataSync())
    }
})

export default connect(null, mapDispatchToProps)(Home);