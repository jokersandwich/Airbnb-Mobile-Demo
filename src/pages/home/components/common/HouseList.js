import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class HouseList extends Component {

    render() {
        const { list, onLike } = this.props;
        return (
            <HouseListWrap>
                {
                    list.map((item) => {
                        return (
                            <HouseItem key={item.title}>
                                <Link to={'/detail/' + item.id}>
                                    <div className='img' style={{backgroundImage: 'url(' + item.imgUrl + ')'}}></div>
                                    {item.tag ? <div className='tag'>新房源</div> : null}
                                    <div className='like'>
                                    <svg
                                        onClick={(e) => onLike(e, item.id)}
                                        fill={item.like ? "#FF5A5F" : "#484848"}
                                        fillOpacity={item.like ? "1" : "0.5"}
                                        viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="2" focusable="false" aria-label="保存此体验" role="img" strokeLinecap="round" strokeLinejoin="round" style={{height: '20px', width: '20px', display: 'block', overflow: 'visible'}}
                                    >
                                        <path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round"></path>
                                    </svg>
                                    </div>
                                    <p className='feature' style={{color: item.featureColor}}>{item.feature} · {item.bedrooms}室{item.bathrooms}卫{item.beds}床</p>
                                    <p className='title'>{item.title}</p>
                                    {
                                        typeof item.price === 'string' ? (
                                            <p className='price'>每晚{item.price}</p>
                                        ) : (
                                            <p className='price'>
                                                <span className='price-new'>{item.price.priceNew}</span>
                                                <span className='price-old'>{item.price.priceOld}</span>
                                                每晚
                                            </p>
                                        )
                                    }
                                    <div>
                                        <span className='comment'>{item.rating}星 · {item.comment}人</span>
                                    </div>
                                </Link>
                            </HouseItem>
                        )
                    })
                }
            </HouseListWrap>
        )
    }
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

    .like {
        position: absolute;
        top: 0;
        right: 0;
        padding: 8px;
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
        line-height: 20px;
        font-size: 12px;
        font-weight: bold;
        color: #484848;
    }
`;

export default HouseList;