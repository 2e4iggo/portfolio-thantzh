import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, *, *::before, *::after{
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box !important;
    font-size: .93vw;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Custom scrollbar styles */
  ::-webkit-scrollbar{
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.background};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.primaryColor}40;
    border-radius: 4px;
    transition: background 0.3s ease;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.primaryColor}80;
  }

  /* Firefox scrollbar */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.primaryColor}40 ${(props) => props.theme.background};
  }

  a,p,h1,h2,h3,h4,h5,h6, span, div,button{
    color: ${(props) => props.theme.textColor};
  }

  /* Performance optimizations */
  img {
    content-visibility: auto;
  }

  /* Focus styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${(props) => props.theme.primaryColor};
    outline-offset: 2px;
  }

  /* Selection color */
  ::selection {
    background-color: ${(props) => props.theme.primaryColor}40;
    color: ${(props) => props.theme.textColor};
  }
`;

export const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 25% 75%;
	grid-template-rows: 100%;
	background-color: ${(props) => props.theme.background};
	transition: background-color 0.3s ease;
	
	@media (max-width: 1024px) {
		grid-template-columns: 30% 70%;
	}
	
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: auto 1fr;
	}
`;

export const ContentContainer = styled.div`
	width: 100%;
	padding: 0 0 0 2.5vw;
	overflow: auto;
	overflow-x: hidden;
	scroll-behavior: smooth;
	
	/* Enable GPU acceleration for smooth scrolling */
	will-change: transform;
	transform: translateZ(0);
	-webkit-overflow-scrolling: touch;
	
	@media (max-width: 768px) {
		padding: 0 4vw;
	}
`;

export const NotFoundPageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  gap: 1.5vw;

	a {
		padding: 1vw 2vw;
		text-decoration: none;
		background-color: ${(props) => props.theme.primaryColor};
		color: ${(props) => props.theme.white};
    border-radius: 3vw;
	}
`;


