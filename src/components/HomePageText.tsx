import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Define the scrolling animation
const scroll = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
`;

// Styled container to wrap the scrolling text
const ScrollingTextContainer = styled.div`
  width: 100%;
  overflow: hidden; /* Ensure content does not cause overflow */
  white-space: nowrap;
  position: relative;
  margin: 0;
  padding: 0;
`;

// Styled component for the text that will scroll
const ScrollingText = styled.span`
  display: inline-block;
  animation: ${scroll} 150s linear infinite; /* Increase duration for much slower scrolling */
  white-space: nowrap;
`;

// Props for HomePageText component to accept text
interface HomePageTextProps {
  text: string;
}

// Component for displaying scrolling text
export const HomePageText: React.FC<HomePageTextProps> = ({ text }) => {
  return (
    <ScrollingTextContainer>
      <ScrollingText>{text}</ScrollingText>
    </ScrollingTextContainer>
  );
};