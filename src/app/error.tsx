"use client";

import { useEffect } from "react";
import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 4vw;
  text-align: center;
  background: linear-gradient(135deg, #1478b610 0%, transparent 50%, #1478b610 100%);
`;

const ErrorTitle = styled.h1`
  font-size: 3vw;
  color: #1478b6;
  margin-bottom: 1vw;
`;

const ErrorMessage = styled.p`
  font-size: 1.2vw;
  color: #666;
  margin-bottom: 2vw;
  max-width: 600px;
`;

const RetryButton = styled.button`
  padding: 1vw 2.5vw;
  background: #1478b6;
  color: white;
  border: none;
  border-radius: 5vw;
  font-size: 1.1vw;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(20, 120, 182, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(20, 120, 182, 0.4);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <ErrorContainer>
      <ErrorTitle>⚠️ Oops! Something went wrong</ErrorTitle>
      <ErrorMessage>
        We encountered an unexpected error. Don't worry, you can try refreshing the page or clicking the button below to try again.
      </ErrorMessage>
      <RetryButton onClick={() => reset()}>
        🔄 Try Again
      </RetryButton>
    </ErrorContainer>
  );
}
