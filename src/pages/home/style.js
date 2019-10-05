import styled from 'styled-components';

export const Banner = styled.div`
    margin-bottom: 48px;
    height: 183px;
    background-image: url('https://z1.muscache.cn/pictures/hongbao/marquee/original/251cdfc2-4539-4a9c-9dbc-95acb667c122.jpg');
    background-size: cover;
    over-flow: hidden;
`;

export const Content = styled.div`
    margin: 0 24px;
`;

export const Section = styled.div`
    margin-top: 32px;
    margin-bottom: 48px;
`;

export const Title = styled.div`
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

export const SectionTabList = styled.div`
    margin: 0 -24px 8px;
    font-size: 0;
    white-space: nowrap;
    overflow-x: scroll;
`;

export const SectionTabItem = styled.div`
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

export const HouseList = styled.div`
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

export const More = styled.div`
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