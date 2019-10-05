import React, { Component } from 'react';
// ↓ 这几个公用组件考虑移到common文件夹里（如果接口不能拆分成多个，都在index处理数据，就不用移动了）
import Section from './Section';
import Title from './Title';
import TabList from './TabList';
import HouseList from './HouseList';
import More from './More';

class DiscountHouse extends Component {
    render() {
        const tagList = ['成都', '重庆']
        const houseList = [{
            imgUrl: 'https://z1.muscache.cn/im/pictures/7f3ea237-27cf-40bd-8ab5-0a634b0ead1e.jpg?aki_policy=large',
            tag: '新房源',
            feature: '整套公寓 · 1室1卫1床',
            title: '「蔚然·小筑」近春熙路太古里／地铁口高档公寓／100寸投影／马歇尔蓝牙音箱',
            price: {
                priceNew: '￥185',
                priceOld: '￥218',
            },
            comment: 14
        }]
        return (
            <Section>
                <Title title='秋季特惠房源' subtitle='低至 8 折，可叠加使用礼券'></Title>
                <TabList list={tagList} active='成都'></TabList>
                <HouseList list={houseList}></HouseList>
                <More  text='显示更多成都的房源'></More>
            </Section>
        )
    }
}

export default DiscountHouse;