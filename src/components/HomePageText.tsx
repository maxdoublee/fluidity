import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Define the typewriter animation
const typewriter = keyframes`
  0% { width: 0; }           /* Start with no text visible */
  10% { width: 20%; }         /* Gradually reveal text */
  20% { width: 40%; }
  30% { width: 60%; }
  40% { width: 80%; }
  50%, 60% { width: 100%; }   /* Full text visible, pause here */
  70% { width: 80%; }         /* Start retracting text */
  80% { width: 60%; }
  90% { width: 40%; }
  100% { width: 0; }          /* Back to start */
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
  animation: ${typewriter} 15s steps(30, end) infinite; /* 15s duration, adjust for speed */
  white-space: nowrap;
  border-right: 2px solid var(--default-color); /* Blinking cursor effect */
  padding-right: 8px; /* Space after text */
  color: var(--default-color);
`;

interface HomePageTextProps {
  text: string;
}

export const HomePageText: React.FC<HomePageTextProps> = ({ text }) => {
  return (
    <ScrollingTextContainer>
      <ScrollingText>{text}</ScrollingText>
    </ScrollingTextContainer>
  );
};