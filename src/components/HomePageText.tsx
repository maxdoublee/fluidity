import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const scroll = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
`;

const ScrollingTextContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
`;

const ScrollingText = styled.span`
  display: inline-block;
  animation: ${scroll} 20s linear infinite;
  white-space: nowrap;
`;

export const HomePageText = () => {
  return (
    <ScrollingTextContainer>
      <ScrollingText>Someone's keeping watch, I feel them on my shoulder... running...</ScrollingText>
    </ScrollingTextContainer>
  );
};