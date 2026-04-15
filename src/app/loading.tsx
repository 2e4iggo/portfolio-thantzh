"use client";

import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1478b610 0%, transparent 50%, #1478b610 100%);
  gap: 2vw;
`;

const Spinner = styled.div`
  width: 4vw;
  height: 4vw;
  border: 0.4vw solid #1478b620;
  border-top: 0.4vw solid #1478b6;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  font-size: 1.2vw;
  color: #1478b6;
  animation: ${pulse} 1.5s ease-in-out infinite;
  font-weight: 600;
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>Loading your portfolio...</LoadingText>
    </LoadingContainer>
  );
}
