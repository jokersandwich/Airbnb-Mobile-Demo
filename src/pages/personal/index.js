import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Header,
    Item,
    GoBack
} from './style';

class Personal extends Component {
    render() {
        return (
            <>
                <Header>
                    <div className='avatar-wrap'>
                        <img src='https://z1.muscache.cn/im/pictures/user/1678273b-ec4d-481f-ae6e-a0ed502db45f.jpg?aki_policy=profile_x_medium' alt='avatar' width='48' height='48' className='avatar'></img>
                    </div>
                    <p className='hello'>你好，</p>
                    <p className='user'>Michelle</p>
                </Header>
                <Link to='/wish'>
                    <Item>
                        <div className='icon-wrap'>
                            <img src='https://z1.muscache.cn/pictures/fcdb0b6a-da8d-4a9d-acb8-d15d63abc110.jpg' alt='with-list' width='20' height='20'></img>
                        </div>
                        <div className='text'>
                            <span>心愿单</span>
                        </div>
                    </Item>
                </Link>
                {/* <Item>
                    <div className='icon-wrap'>
                        <img src='https://z1.muscache.cn/pictures/8ae4d357-5313-494e-80e9-92b58e1c41f8.jpg' alt='logout' width='20' height='20'></img>
                    </div>
                    <div className='text'>
                        <span>退出</span>
                    </div>
                </Item> */}
                <GoBack onClick={() => this.props.history.goBack()}>返回</GoBack>
            </>
        )
    }
}

export default Personal;