import styled from "styled-components";

export const ProfessionalSummaryContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 70vh;
	padding: 2rem 1rem;
	position: relative;
	overflow: hidden;

	@media (min-width: 768px) {
		padding: 4vw 6vw;
	}

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
		margin-bottom: 1.5rem;

		@media (min-width: 768px) {
			margin-bottom: 0;
		}
	}
`;

export const SummaryHeader = styled.div`
	text-align: center;
	margin-bottom: 2rem;
	animation: fadeInDown 0.8s ease-out;

	@media (min-width: 768px) {
		margin-bottom: 3vw;
	}

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
		font-size: 1.75rem;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
		line-height: 1.2;
		position: relative;
		display: inline-block;

		@media (min-width: 768px) {
			font-size: 2.8vw;
			margin-bottom: 1.2vw;
		}

		&::after {
			content: "";
			position: absolute;
			bottom: -0.5rem;
			left: 50%;
			transform: translateX(-50%);
			width: 60%;
			height: 3px;
			background: linear-gradient(
				90deg,
				transparent,
				${(props) => props.theme.primaryColor},
				transparent
			);
			border-radius: 2px;

			@media (min-width: 768px) {
				bottom: -0.5vw;
				height: 0.3vw;
			}
		}
	}

	.subtitle {
		font-size: 0.95rem;
		font-weight: 600;
		color: ${(props) => props.theme.textColor};
		opacity: 0.85;
		margin-top: 1.5rem;
		line-height: 1.4;

		@media (min-width: 768px) {
			font-size: 1.6vw;
			margin-top: 1.8vw;
		}
	}
`;

export const SummaryCard = styled.div`
	background: ${(props) => props.theme.background};
	border: 2px solid ${(props) => props.theme.primaryColor}20;
	border-radius: 1rem;
	padding: 1.5rem;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
	transition: all 0.4s ease;
	animation: fadeInUp 1s ease-out 0.3s both;

	@media (min-width: 768px) {
		border-radius: 1.5vw;
		padding: 3vw 4vw;
	}

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
		font-size: 0.95rem;
		line-height: 1.8;
		color: ${(props) => props.theme.textColor};
		text-align: left;
		opacity: 0.9;
		letter-spacing: 0.01em;

		@media (min-width: 768px) {
			font-size: 1.2vw;
			line-height: 2;
			text-align: justify;
			text-justify: inter-word;
		}
	}
`;

export const HighlightBadges = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 1.5rem;
	animation: fadeIn 1.2s ease-out 0.6s both;

	@media (min-width: 768px) {
		gap: 1vw;
		margin-top: 2.5vw;
	}

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
	padding: 0.5rem 1rem;
	border-radius: 2rem;
	font-size: 0.85rem;
	font-weight: 600;
	transition: all 0.3s ease;
	cursor: default;
	position: relative;
	overflow: hidden;

	@media (min-width: 768px) {
		padding: 0.8vw 1.8vw;
		border-radius: 5vw;
		font-size: 1vw;
	}

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
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	gap: 1rem;
	margin-top: 2rem;
	animation: fadeInUp 1s ease-out 0.8s both;

	@media (min-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2vw;
		margin-top: 3vw;
	}
`;

export const StatCard = styled.div`
	text-align: center;
	padding: 1rem;
	background: ${(props) => props.theme.primaryColor}08;
	border-radius: 0.75rem;
	border: 1px solid ${(props) => props.theme.primaryColor}20;
	transition: all 0.3s ease;

	@media (min-width: 768px) {
		padding: 2vw;
		border-radius: 1vw;
	}

	&:hover {
		background: ${(props) => props.theme.primaryColor}12;
		border-color: ${(props) => props.theme.primaryColor}40;
		transform: scale(1.05);
	}

	.stat-number {
		font-size: 2rem;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin-bottom: 0.5rem;

		@media (min-width: 768px) {
			font-size: 2.5vw;
			margin-bottom: 0.5vw;
		}
	}

	.stat-label {
		font-size: 0.75rem;
		color: ${(props) => props.theme.textColor};
		opacity: 0.7;
		text-transform: uppercase;
		letter-spacing: 0.05em;

		@media (min-width: 768px) {
			font-size: 1vw;
		}
	}
`;
