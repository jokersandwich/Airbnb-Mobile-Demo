import React from 'react';
import DiscountHouse from './components/DiscountHouse';
import {
    Banner,
    Content
} from './style';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Content>
                <DiscountHouse></DiscountHouse>
            </Content>
        </>
    )
}

export default Home;