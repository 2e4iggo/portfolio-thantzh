import styled from "styled-components";

export const ProfessionalSummaryContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 70vh;
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
			${(props) => props.theme.primaryColor}10 0%,
			${(props) => props.theme.background} 50%,
			${(props) => props.theme.primaryColor}08 100%
		);
		z-index: 0;
	}

	.content-wrapper {
		position: relative;
		z-index: 1;
		max-width: 1200px;
		width: 100%;
	}
`;

export const SummaryHeader = styled.div`
	text-align: center;
	margin-bottom: 3vw;
	animation: fadeInDown 0.8s ease-out;

	@keyframes fadeInDown {
		from {
			opacity: 0;
			transform: translateY(-30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.main-title {
		font-size: 2.8vw;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin-bottom: 1.2vw;
		letter-spacing: -0.02em;
		line-height: 1.2;
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
		font-size: 1.6vw;
		font-weight: 600;
		color: ${(props) => props.theme.textColor};
		opacity: 0.85;
		margin-top: 1.8vw;
		line-height: 1.4;
	}
`;

export const SummaryCard = styled.div`
	background: ${(props) => props.theme.background};
	border: 2px solid ${(props) => props.theme.primaryColor}20;
	border-radius: 1.5vw;
	padding: 3vw 4vw;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
	transition: all 0.4s ease;
	animation: fadeInUp 1s ease-out 0.3s both;

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(40px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
		border-color: ${(props) => props.theme.primaryColor}40;
	}

	.description {
		font-size: 1.2vw;
		line-height: 2;
		color: ${(props) => props.theme.textColor};
		text-align: justify;
		text-justify: inter-word;
		opacity: 0.9;
		letter-spacing: 0.01em;
	}
`;

export const HighlightBadges = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1vw;
	margin-top: 2.5vw;
	animation: fadeIn 1.2s ease-out 0.6s both;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Badge = styled.div`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.primaryColor}15,
		${(props) => props.theme.primaryColor}08
	);
	border: 1.5px solid ${(props) => props.theme.primaryColor}40;
	color: ${(props) => props.theme.primaryColor};
	padding: 0.8vw 1.8vw;
	border-radius: 5vw;
	font-size: 1vw;
	font-weight: 600;
	transition: all 0.3s ease;
	cursor: default;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			${(props) => props.theme.primaryColor}20,
			transparent
		);
		transition: left 0.5s ease;
	}

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px ${(props) => props.theme.primaryColor}30;
		border-color: ${(props) => props.theme.primaryColor}60;

		&::before {
			left: 100%;
		}
	}
`;

export const StatsSection = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 2vw;
	margin-top: 3vw;
	animation: fadeInUp 1s ease-out 0.8s both;
`;

export const StatCard = styled.div`
	text-align: center;
	padding: 2vw;
	background: ${(props) => props.theme.primaryColor}08;
	border-radius: 1vw;
	border: 1px solid ${(props) => props.theme.primaryColor}20;
	transition: all 0.3s ease;

	&:hover {
		background: ${(props) => props.theme.primaryColor}12;
		border-color: ${(props) => props.theme.primaryColor}40;
		transform: scale(1.05);
	}

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
