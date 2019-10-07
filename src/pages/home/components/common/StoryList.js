import React from 'react';
import styled from 'styled-components';

const StoryList = (props) => {
    return (
        <StoryListWrap>
            {
                props.list.map((item) => {
                    return (
                        <StoryItem key={item.title}>
                            <div className='img' style={{backgroundImage: 'url(' + item.imgUrl + ')'}}>
                                <div className='tag'>{item.tag}</div>
                            </div>
                            <div className='content'>
                                <span className='location'>{item.location}</span>
                                <span className='title'>{item.title}</span>
                            </div>
                            <div className='comment'>
                                <svg viewBox="0 0 16 16" role="img" aria-label="“赞”的数量" focusable="false" style={{height: '1em', width:'1em', fill: '#767676'}}><path d="m14.5 7.63c0-.97-.8-1.63-2-1.63l-4.5.01c.04-.05.11-.12.2-.21.39-.4 1.04-1.06 1.41-1.87.31-.68.46-1.61.37-2.32-.09-.65-.59-1.61-1.61-1.61-.44 0-1.23.2-1.6 1.52a3.12 3.12 0 0 0 -.05.22c-.14.62-.44 1.93-3.11 2.86-2.4.82-3.61 2.81-3.61 5.9 0 3.44 1.98 5.5 5.3 5.5h6.2c1.2 0 2-.65 2-1.63 0-.33-.09-.64-.24-.89.62-.34.74-.94.74-1.36a1.66 1.66 0 0 0 -.24-.9c.65-.37.74-1.01.74-1.35 0-.28-.06-.77-.45-1.14.29-.28.45-.66.45-1.11"></path></svg>
                                <span className='num'>{item.like}</span>
                                <svg viewBox="0 0 16 16" role="img" aria-label="评论数量" focusable="false" style={{height: '1em', width:'1em', fill: '#767676'}}><path d="m4.5 7h4c .28 0 .5.23.5.5s-.22.5-.5.5h-4c-.28 0-.5-.23-.5-.5s.22-.5.5-.5m-.5-2.5c0-.28.22-.5.5-.5h7c .28 0 .5.23.5.5s-.23.5-.5.5h-7c-.28 0-.5-.23-.5-.5m8.5-3.5h-9c-1.38 0-2.5 1.12-2.5 2.5v12c0 .25.18.45.42.49.03.01.05.01.08.01.21 0 .41-.14.47-.34.56-1.69 2.74-3.66 7.03-3.66h3.5c1.38 0 2.5-1.12 2.5-2.5v-6c0-1.38-1.12-2.5-2.5-2.5"></path></svg>
                                <span className='num'>{item.comment}</span>
                            </div>
                        </StoryItem>
                    )
                })
            }
        </StoryListWrap>
    )
}

export const StoryListWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const StoryItem = styled.div`
    position: relative;
    margin-bottom: 24px;
    width: calc(50% - 4px);

    .img {
        position: relative;
        padding-top: 100%;
        width: 100%;
        border-radius: 6px;
        background-color: #eee;
        background-size: cover;
    }

    .tag {
        position: absolute;
        bottom: 8px;
        right: 8px;
        padding: 4px 8px;
        border-radius: 4px;
        background: #fff;
        line-height: 1.33em;
        font-size: 12px;
        font-weight: bold;
        color: #484848;
    }

    .content {
        margin-top: 8px;
        line-height: 18px;
        overflow: hidden;
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .location {
        margin-right: 4px;
        line-height: 1.285em;
        font-size: 14px;
        font-weight: bold;
        color: #484848;
    }

    .comment {
        margin-top: 4px;
    }

    .num {
        position: relative;
        bottom: 3px;
        margin-left: 4px;
        margin-right: 8px;
        line-height: 1.33em;
        font-size: 12px;
        color: #767676;
        font-family: Circular, "PingFang-SC", "Hiragino Sans GB", "微软雅黑", "Microsoft YaHei", "Heiti SC" !important;
    }
`;

export default StoryList;