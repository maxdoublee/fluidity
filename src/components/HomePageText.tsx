import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Define keyframes for scrolling animation
const scroll = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Define styled components
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

// Use ScrollingTextContainer directly without declaring it as a type
export const HomePageText = () => {
  return (
    <ScrollingTextContainer>
      <ScrollingText>Someone's keeping watch, I feel them on my shoulder... running...</ScrollingText>
    </ScrollingTextContainer>
  );
};