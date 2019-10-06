import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
    return (
        <TitleWrap>
            <p className='title'>{props.title}</p>
            <p className='subtitle'>{props.subtitle}</p>
        </TitleWrap>
    )
}

const TitleWrap = styled.div`
    margin-bottom: 16px;

    .title {
        line-height: 26px;
        font-size: 18px;
        font-weight: bold;
    }

    .sub-title {
        line-height: 19px;
        font-size: 13px;
    }
`;

export default Title;