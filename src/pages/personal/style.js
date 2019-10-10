import styled from 'styled-components';

export const Header = styled.div`
    position: relative;

    .avatar-wrap {
        position: absolute;
        top: 32px;
        right: 24px;
        width: 48px;
        height: 48px;
    }

    .avatar {
        background: #d8d8d8;
        border-radius: 50%;
        border: 2px solild #fff;
        vertical-align: middle;
        overflow: hidden;
        display: block;
    }

    .hello {
        padding-top: 35px;
        padding-left: 24px;
    }

    .user {
        padding-left: 24px;
        padding-bottom: 35px;
        font-size: 18px;
        font-weight: bold;
    }
`;

export const Item = styled.div`
    padding-bottom: 36px;
    height: 56px;

    .icon-wrap {
        display: inline-block;
        padding-left: 24px;
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }

    .text {
        display: inline-block;
        margin-left: 36px;
        font-size: 14px;
    }
`;

export const GoBack = styled.div`
    position: fixed;
    bottom: 0;
    padding: 16px 0;
    width: 100%;
    background: #fff;
    text-align: center;
    z-index: 10;
`;