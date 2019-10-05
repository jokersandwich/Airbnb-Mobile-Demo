import React from 'react';
import styled from 'styled-components';

const HouseList = (props) => {
    return (
        <HouseListWrap>
            {
                props.list.map((item) => {
                    return (
                        <HouseItem key={item.title}>
                            <div className='img' style={{backgroundImage: item.imgUrl}}></div>
                            <div className='tag'>{item.tag}</div>
                            <p className='feature'>{item.feature}</p>
                            <p className='title'>{item.title}</p>
                            <p className='price'>
                                <span className='price-new'>{item.price.priceNew}</span>
                                <span className='price-old'>{item.price.priceOld}</span>
                                每晚
                            </p>
                            <div>
                                <span className='comment'>{item.rating}星 · {item.comment}人</span>
                            </div>
                        </HouseItem>
                    )
                })
            }
        </HouseListWrap>
    )
}

export const HouseListWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const HouseItem = styled.div`
    position: relative;
    margin-bottom: 24px;
    width: calc(50% - 4px);

    .img {
        padding-top: 66.7%;
        width: 100%;
        background-color: #eee;
        background-image: url('https://z1.muscache.cn/im/pictures/7f3ea237-27cf-40bd-8ab5-0a634b0ead1e.jpg?aki_policy=large');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .tag {
        position: absolute;
        top: 8px;
        left: 8px;
        padding: 2px 4px;
        background: #fff;
        border-radius: 2px;
        line-height: 12px;
        color: #484848;
        font-size: 10px;
        font-weight: bold;
    }

    .feature {
        margin-top: 8px;
        margin-bottom: 2px;
        display: -webkit-box;
        height: 13px;
        line-height: 13px;
        overflow: hidden;
        font-size: 10px;
        font-weight: bold;
        color: #572533;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .title {
        margin-bottom: 2px;
        display: -webkit-box;
        overflow: hidden;
        line-height: 18px;
        font-size: 14px;
        font-weight: bold;
        color: #484848;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .price {
        display: -webkit-box;
        height: 16px;
        line-height: 16px;
        overflow: hidden;
        font-size: 12px;
        color: #484848;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .price-new {
        font-weight: bold;
    }

    .price-old {
        text-decoration: line-through;
    }

    .comment {
        margin-left: 4px;
        line-height: 20px;
        font-size: 12px;
        font-weight: bold;
        color: #484848;
    }
`;

export default HouseList;