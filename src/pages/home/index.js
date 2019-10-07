import React, { Component } from 'react';
import { connect } from 'react-redux';
import DiscountHouse from './components/DiscountHouse';
import HotPlace from './components/HotPlace';
import House from './components/House';
import Experience from './components/Experience';
import Story from './components/Story';
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
                    <HotPlace></HotPlace>
                    <House></House>
                    <Story></Story>
                    <Experience></Experience>
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