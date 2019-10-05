import React from 'react';
import styled from 'styled-components';

const More = props => <MoreWrap>{props.text}</MoreWrap>;

export const MoreWrap = styled.div`
    padding: 6px 15px;
    display: block;
    width: 100%;
    min-width: 48px;
    background: transparent;
    border: 1px solid #008489;
    border-radius: 4px;
    line-height: 22px;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    color: #008489;
`;

export default More;