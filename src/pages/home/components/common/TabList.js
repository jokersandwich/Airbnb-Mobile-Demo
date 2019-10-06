import React from 'react';
import styled from 'styled-components';

const TabList = (props) => {
    const { list, active } = props
    return (
        <TabListWrap>
            {
                list.map((item, index) => {
                    return (
                        <TabItem key={index}>
                            <div className={ item === active ? 'button active' : 'button'}>{item}</div>
                        </TabItem>
                    )
                })
            }
        </TabListWrap>
    )
}

export const TabListWrap = styled.div`
    margin: 0 -24px 8px;
    font-size: 0;
    white-space: nowrap;
    overflow-x: scroll;
`;

export const TabItem = styled.div`
    display: inline-block;
    padding: 0 4px;
    height: 62px;

    &:first-child {
        padding-left: 24px;
    }

    .button {
        display: inline-block;
        width: 72px;
        height: 48px;
        background: #fff;
        border: 1px solid;
        border-color: #d8d8d8;
        border-radius: 3px;
        box-shadow: 0px 1px 2px rgba(0, 0, 0, .15);
        line-height: 48px;
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    }

    .button.active {
        background: #008489;
        border-color: #008489;
        box-shadow: 0px 7px 14px rgba(0, 132, 138, 0.15);
        color: #fff;
    }
`;

export default TabList;