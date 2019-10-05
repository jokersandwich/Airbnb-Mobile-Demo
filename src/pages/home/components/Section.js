import React from 'react';
import styled from 'styled-components';

const Section = props => <SectionWrap>{props.children}</SectionWrap>;

const SectionWrap = styled.div`
    margin-top: 32px;
    margin-bottom: 48px;
`;

export default Section;