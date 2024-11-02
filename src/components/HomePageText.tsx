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
  margin: 0;
  padding: 0;
`;

const ScrollingText = styled.span`
  display: inline-block;
  animation: ${scroll} 40s linear infinite;
  white-space: nowrap;
`;

interface HomePageTextProps {
  text: string; // Explicitly define the type as 'string'
}

export const HomePageText: React.FC<HomePageTextProps> = ({ text }) => {
  return (
    <ScrollingTextContainer>
      <ScrollingText>{text}</ScrollingText>
    </ScrollingTextContainer>
  );
};