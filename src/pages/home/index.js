import React, { Component } from 'react';
import {
    Banner,
    Content,
    Section,
    Title,
    SectionTabList,
    SectionTabItem,
    HouseList,
    HouseItem,
    More
} from './style';

class Home extends Component {
    render() {
        return (
            <>
                <Banner></Banner>
                <Content>
                    <Section>
                        <Title>
                            <p className='title'>秋季特惠房源</p>
                            <p className='sub-title'>低至 8 折，可叠加使用礼券</p>
                        </Title>
                        <SectionTabList>
                            <SectionTabItem>
                                <div className='button active'>成都</div>
                            </SectionTabItem>
                            <SectionTabItem>
                                <div className='button'>重庆</div>
                            </SectionTabItem>
                        </SectionTabList>
                        <HouseList>
                            <HouseItem>
                                <div className='img'></div>
                                <div className='tag'>新房源</div>
                                <p className='feature'>整套公寓 · 1室1卫1床</p>
                                <p className='title'>「蔚然·小筑」近春熙路太古里／地铁口高档公寓／100寸投影／马歇尔蓝牙音箱</p>
                                <p className='price'>
                                    <span className='price-new'>￥185</span>
                                    <span className='price-old'>￥218</span>
                                    每晚
                                </p>
                                <div>
                                    <span className='comment'>14</span>
                                </div>
                            </HouseItem>
                            <HouseItem>
                                <div className='img'></div>
                                <div className='tag'>新房源</div>
                                <p className='feature'>整套公寓 · 1室1卫1床</p>
                                <p className='title'>「蔚然·小筑」近春熙路太古里／地铁口高档公寓／100寸投影／马歇尔蓝牙音箱</p>
                                <p className='price'>
                                    <span className='price-new'>￥185</span>
                                    <span className='price-old'>￥218</span>
                                    每晚
                                </p>
                                <div>
                                    <span className='comment'>14</span>
                                </div>
                            </HouseItem>
                            <HouseItem>
                                <div className='img'></div>
                                <div className='tag'>新房源</div>
                                <p className='feature'>整套公寓 · 1室1卫1床</p>
                                <p className='title'>「蔚然·小筑」近春熙路太古里／地铁口高档公寓／100寸投影／马歇尔蓝牙音箱</p>
                                <p className='price'>
                                    <span className='price-new'>￥185</span>
                                    <span className='price-old'>￥218</span>
                                    每晚
                                </p>
                                <div>
                                    <span className='comment'>14</span>
                                </div>
                            </HouseItem>
                            <HouseItem>
                                <div className='img'></div>
                                <div className='tag'>新房源</div>
                                <p className='feature'>整套公寓 · 1室1卫1床</p>
                                <p className='title'>「蔚然·小筑」近春熙路太古里／地铁口高档公寓／100寸投影／马歇尔蓝牙音箱</p>
                                <p className='price'>
                                    <span className='price-new'>￥185</span>
                                    <span className='price-old'>￥218</span>
                                    每晚
                                </p>
                                <div>
                                    <span className='comment'>14</span>
                                </div>
                            </HouseItem>
                            <More>显示更多成都的房源</More>
                        </HouseList>
                    </Section>
                </Content>
            </>
        )
    }
}

export default Home;