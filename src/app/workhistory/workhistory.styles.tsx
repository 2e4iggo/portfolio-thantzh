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

const fadeInLeft = keyframes`
	from {
		opacity: 0;
		transform: translateX(-40px);
	}
	to {
		opacity: 1;
		transform: translateX(0);
	}
`;

export const WorkHistoryContainer = styled.div`
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
		max-width: 1200px;
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

export const Timeline = styled.div`
	position: relative;
	padding-left: 3vw;

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 2vw;
		bottom: 2vw;
		width: 0.3vw;
		background: linear-gradient(
			180deg,
			${(props) => props.theme.primaryColor}40,
			${(props) => props.theme.primaryColor}80,
			${(props) => props.theme.primaryColor}40
		);
		border-radius: 2px;
	}
`;

export const ExperienceCard = styled.div<{ $delay?: number }>`
	position: relative;
	margin-bottom: 3vw;
	animation: ${fadeInLeft} 0.8s ease-out ${(props) => props.$delay || 0}s both;

	&::before {
		content: "";
		position: absolute;
		left: -3.5vw;
		top: 1.5vw;
		width: 1.2vw;
		height: 1.2vw;
		background: ${(props) => props.theme.primaryColor};
		border: 0.3vw solid ${(props) => props.theme.background};
		border-radius: 50%;
		box-shadow: 0 0 0 0.3vw ${(props) => props.theme.primaryColor}30;
		z-index: 2;
	}
`;

export const ExperienceContent = styled.div`
	background: ${(props) => props.theme.background};
	border: 2px solid ${(props) => props.theme.primaryColor}20;
	border-radius: 1.5vw;
	padding: 2vw 2.5vw;
	box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
	transition: all 0.4s ease;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 0.4vw;
		height: 100%;
		background: linear-gradient(
			180deg,
			${(props) => props.theme.primaryColor},
			${(props) => props.theme.primaryColor}60
		);
	}

	&:hover {
		transform: translateX(10px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
		border-color: ${(props) => props.theme.primaryColor}40;
	}
`;

export const ExperienceHeader = styled.div`
	margin-bottom: 1.5vw;
	padding-bottom: 1vw;
	border-bottom: 1px solid ${(props) => props.theme.primaryColor}15;
`;

export const JobTitle = styled.h2`
	font-size: 1.6vw;
	font-weight: 700;
	color: ${(props) => props.theme.textColor};
	margin: 0 0 0.5vw 0;
	display: flex;
	align-items: center;
	gap: 0.8vw;

	.title-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2vw;
		height: 2vw;
		background: linear-gradient(
			135deg,
			${(props) => props.theme.primaryColor}20,
			${(props) => props.theme.primaryColor}10
		);
		border-radius: 0.5vw;
		font-size: 1.2vw;
	}
`;

export const CompanyInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1vw;
	align-items: center;
	margin-top: 0.8vw;
`;

export const Company = styled.span`
	font-size: 1.1vw;
	font-weight: 600;
	color: ${(props) => props.theme.primaryColor};
	display: flex;
	align-items: center;
	gap: 0.5vw;

	&::before {
		content: "🏢";
		font-size: 1vw;
	}
`;

export const Duration = styled.span`
	font-size: 1vw;
	color: ${(props) => props.theme.textColor};
	opacity: 0.7;
	display: flex;
	align-items: center;
	gap: 0.5vw;
	padding: 0.4vw 1vw;
	background: ${(props) => props.theme.primaryColor}08;
	border-radius: 3vw;
	border: 1px solid ${(props) => props.theme.primaryColor}20;

	&::before {
		content: "📅";
		font-size: 0.9vw;
	}
`;

export const AchievementsList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 1vw;
`;

export const AchievementItem = styled.li`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 1vw;
	font-size: 1.05vw;
	line-height: 1.8;
	color: ${(props) => props.theme.textColor};
	opacity: 0.9;
	position: relative;
	padding-left: 0.5vw;

	&::before {
		content: "✓";
		color: ${(props) => props.theme.primaryColor};
		font-weight: 700;
		font-size: 1.2vw;
		display: flex;
		align-items: flex-start;
		padding-top: 0.1vw;
	}

	strong {
		color: ${(props) => props.theme.primaryColor};
		font-weight: 600;
	}
`;

export const HighlightBadge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 0.5vw;
	padding: 0.5vw 1.2vw;
	background: linear-gradient(
		135deg,
		${(props) => props.theme.primaryColor}15,
		${(props) => props.theme.primaryColor}08
	);
	border: 1px solid ${(props) => props.theme.primaryColor}40;
	color: ${(props) => props.theme.primaryColor};
	border-radius: 4vw;
	font-size: 0.9vw;
	font-weight: 600;
	margin-top: 1vw;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px ${(props) => props.theme.primaryColor}30;
	}

	&.current {
		background: linear-gradient(
			135deg,
			${(props) => props.theme.primaryColor},
			${(props) => props.theme.primaryColor}CC
		);
		color: ${(props) => props.theme.white};
		animation: pulse 2s ease-in-out infinite;
	}

	@keyframes pulse {
		0%,
		100% {
			box-shadow: 0 0 0 0 ${(props) => props.theme.primaryColor}40;
		}
		50% {
			box-shadow: 0 0 0 0.5vw ${(props) => props.theme.primaryColor}00;
		}
	}
`;

export const SummarySection = styled.div`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.primaryColor}10,
		${(props) => props.theme.primaryColor}05
	);
	border: 2px solid ${(props) => props.theme.primaryColor}30;
	border-radius: 1.5vw;
	padding: 2.5vw;
	margin-top: 3vw;
	text-align: center;
	animation: ${fadeInUp} 1s ease-out 1s both;

	h3 {
		font-size: 1.8vw;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin-bottom: 1.5vw;
	}

	.summary-stats {
		display: flex;
		justify-content: center;
		gap: 3vw;
		margin-top: 2vw;
	}
`;

export const SummaryStat = styled.div`
	.stat-number {
		font-size: 2.5vw;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin-bottom: 0.5vw;
	}

	.stat-label {
		font-size: 1vw;
		color: ${(props) => props.theme.textColor};
		opacity: 0.7;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
`;
