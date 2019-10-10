import React, { Component } from 'react';
import styled from 'styled-components';

class WishList extends Component {
    render() {
        const { list, onLike } = this.props;

        return (
            <WishListWrap>
                {
                    list.map((item) => {
                        return (
                            <WishItem key={item.id}>
                                <div className='img' style={{backgroundImage: 'url(' + item.imgUrl + ')'}}></div>
                                <div className='like'>
                                    <svg
                                        onClick={(e) => onLike(e, item.id, item.houseType)}
                                        fill={item.like ? "#FF5A5F" : "#484848"}
                                        fillOpacity={item.like ? "1" : "0.5"}
                                        viewBox="0 0 24 24" stroke="#ffffff" strokeWidth="2" focusable="false" aria-label="保存此体验" role="img" strokeLinecap="round" strokeLinejoin="round" style={{height: '20px', width: '20px', display: 'block', overflow: 'visible'}}
                                    >
                                        <path d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6" strokeLinejoin="round"></path>
                                    </svg>
                                </div>
                                <div className='info'>
                                    <div className='avatar-wrap'>
                                        <img alt='avatar' className='avatar' width='40' height='40' src={item.avatar} />
                                    </div>
                                    <div className='feature' style={{color: item.featureColor}}>{item.feature} · {item.beds}张床</div>
                                    <div className='title'>{item.title}</div>
                                    <div className='price'>{item.price}/晚</div>
                                    <div className='comment'>{item.rating}星 · {item.comment}人</div>
                                </div>
                            </WishItem>
                        )
                    })
                }
            </WishListWrap>
        )
    }
}

const WishListWrap = styled.div``;

const WishItem = styled.div`
    position: relative;
    margin-top: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #ddd;

    .img {
        padding-top: 66.7%;
        width: 100%;
        background-color: #eee;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }

    .like {
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 16px;
    }

    .info {
        padding-top: 8px;
    }

    .avatar-wrap {
        float: right;
        width: 40px;
        height: 40px;
    }

    .avatar {
        display: block;
        background: #d8d8d8;
        border-radius: 50%;
        border: 2px solid #fff;
        overflow: hidden;
    }

    .feature {
        margin-top: 8px;
        margin-bottom: 2px;
        display: -webkit-box;
        height: 16px;
        line-height: 16px;
        overflow: hidden;
        font-size: 13px;
        font-weight: bold;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .title {
        margin-bottom: 2px;
        line-height: 20px;
        font-size: 15px;
        font-weight: bold;
        color: #484848;
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
        overflow: hidden !important;
    }

    .price {
        height: 18px;
        line-height: 18px;
        font-size: 13px;
        color: #484848;
    }

    .comment {
        line-height: 20px;
        font-size: 12px;
        font-weight: bold;
        color: #484848;
    }
`;

export default WishList;