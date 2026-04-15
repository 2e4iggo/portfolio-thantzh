import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeInDown = keyframes`
	from {
		opacity: 0;
		transform: translateY(-30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const scaleIn = keyframes`
	from {
		opacity: 0;
		transform: scale(0.9);
	}
	to {
		opacity: 1;
		transform: scale(1);
	}
`;

export const SkillsContainer = styled.div`
	min-height: 100vh;
	padding: 4vw 6vw;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			135deg,
			${(props) => props.theme.primaryColor}08 0%,
			${(props) => props.theme.background} 50%,
			${(props) => props.theme.primaryColor}10 100%
		);
		z-index: 0;
	}

	.content-wrapper {
		position: relative;
		z-index: 1;
		max-width: 1400px;
		margin: 0 auto;
	}
`;

export const PageHeader = styled.div`
	text-align: center;
	margin-bottom: 4vw;
	animation: ${fadeInDown} 0.8s ease-out;

	h1 {
		font-size: 3vw;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin-bottom: 1vw;
		letter-spacing: -0.02em;
		position: relative;
		display: inline-block;

		&::after {
			content: "";
			position: absolute;
			bottom: -0.5vw;
			left: 50%;
			transform: translateX(-50%);
			width: 60%;
			height: 0.3vw;
			background: linear-gradient(
				90deg,
				transparent,
				${(props) => props.theme.primaryColor},
				transparent
			);
			border-radius: 2px;
		}
	}

	.subtitle {
		font-size: 1.3vw;
		color: ${(props) => props.theme.textColor};
		opacity: 0.7;
		margin-top: 1.5vw;
	}
`;

export const SkillsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	gap: 2.5vw;
	margin-bottom: 3vw;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const SkillCategory = styled.div<{ $delay?: number }>`
	background: ${(props) => props.theme.background};
	border: 2px solid ${(props) => props.theme.primaryColor}20;
	border-radius: 1.5vw;
	padding: 2vw;
	box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
	transition: all 0.4s ease;
	animation: ${scaleIn} 0.6s ease-out ${(props) => props.$delay || 0}s both;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 0.4vw;
		background: linear-gradient(
			90deg,
			${(props) => props.theme.primaryColor},
			${(props) => props.theme.primaryColor}60
		);
	}

	&:hover {
		transform: translateY(-8px);
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
		border-color: ${(props) => props.theme.primaryColor}40;
	}
`;

export const CategoryHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 1vw;
	margin-bottom: 1.5vw;
	padding-bottom: 1vw;
	border-bottom: 1px solid ${(props) => props.theme.primaryColor}15;

	.icon {
		font-size: 2vw;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3vw;
		height: 3vw;
		background: linear-gradient(
			135deg,
			${(props) => props.theme.primaryColor}20,
			${(props) => props.theme.primaryColor}10
		);
		border-radius: 0.8vw;
	}

	h3 {
		font-size: 1.5vw;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin: 0;
	}
`;

export const SkillsList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 1.2vw;
`;

export const SkillItem = styled.li`
	display: flex;
	flex-direction: column;
	gap: 0.6vw;
	font-size: 1.05vw;
	color: ${(props) => props.theme.textColor};

	.skill-title {
		font-weight: 700;
		color: ${(props) => props.theme.textColor};
		display: flex;
		align-items: center;
		gap: 0.6vw;

		&::before {
			content: "▸";
			color: ${(props) => props.theme.primaryColor};
			font-size: 1.2vw;
			font-weight: 700;
		}
	}

	.skill-content {
		padding-left: 1.8vw;
		line-height: 1.8;
		opacity: 0.9;
	}
`;

export const SkillTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.6vw;
	padding-left: 1.8vw;
	margin-top: 0.4vw;
`;

export const SkillTag = styled.span`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.primaryColor}12,
		${(props) => props.theme.primaryColor}06
	);
	border: 1px solid ${(props) => props.theme.primaryColor}30;
	color: ${(props) => props.theme.primaryColor};
	padding: 0.4vw 1vw;
	border-radius: 3vw;
	font-size: 0.9vw;
	font-weight: 500;
	transition: all 0.3s ease;
	white-space: nowrap;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 3px 10px ${(props) => props.theme.primaryColor}20;
		border-color: ${(props) => props.theme.primaryColor}50;
	}
`;

export const SoftSkillsSection = styled.div`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.primaryColor}12,
		${(props) => props.theme.primaryColor}06
	);
	border: 2px solid ${(props) => props.theme.primaryColor}30;
	border-radius: 1.5vw;
	padding: 2.5vw;
	margin-top: 3vw;
	animation: ${fadeInUp} 0.8s ease-out 0.8s both;
`;

export const SoftSkillsHeader = styled.div`
	text-align: center;
	margin-bottom: 2vw;

	h2 {
		font-size: 2vw;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin: 0 0 1vw 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1vw;

		&::before,
		&::after {
			content: "";
			width: 3vw;
			height: 0.2vw;
			background: linear-gradient(
				90deg,
				transparent,
				${(props) => props.theme.primaryColor}80,
				transparent
			);
			border-radius: 2px;
		}
	}
`;

export const SoftSkillsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 2vw;
`;

export const SoftSkillCard = styled.div`
	background: ${(props) => props.theme.background};
	border: 2px solid ${(props) => props.theme.primaryColor}20;
	border-radius: 1vw;
	padding: 1.5vw;
	transition: all 0.3s ease;
	text-align: center;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
		border-color: ${(props) => props.theme.primaryColor}40;
	}

	.icon {
		font-size: 2.5vw;
		margin-bottom: 1vw;
	}

	h4 {
		font-size: 1.2vw;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin: 0 0 0.8vw 0;
	}

	p {
		font-size: 1vw;
		line-height: 1.6;
		color: ${(props) => props.theme.textColor};
		opacity: 0.85;
		margin: 0;
	}
`;

export const HighlightBanner = styled.div`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.primaryColor},
		${(props) => props.theme.primaryColor}CC
	);
	color: ${(props) => props.theme.white};
	padding: 2vw 3vw;
	border-radius: 1.5vw;
	margin-top: 3vw;
	text-align: center;
	box-shadow: 0 8px 30px ${(props) => props.theme.primaryColor}40;
	animation: ${fadeIn} 1s ease-out 1s both;

	h3 {
		font-size: 1.6vw;
		font-weight: 700;
		margin: 0 0 1vw 0;
	}

	p {
		font-size: 1.1vw;
		line-height: 1.8;
		margin: 0;
		opacity: 0.95;
	}
`;
