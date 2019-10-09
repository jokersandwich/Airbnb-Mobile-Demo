import styled from 'styled-components';

export const Banner = styled.div`
    position: relative;
    margin-bottom: 48px;
    height: 183px;
    background-image: url('https://z1.muscache.cn/pictures/hongbao/marquee/original/251cdfc2-4539-4a9c-9dbc-95acb667c122.jpg');
    background-size: cover;
    over-flow: hidden;

    .logo-wrap  {
        position: absolute;
        top: 24px;
        left: 24px;
    }

    .login-wrap {
        position: absolute;
        top: 16px;
        right: 16px;
        padding: 8px;
    }
`;

export const Content = styled.div`
    margin: 0 24px;
`;

