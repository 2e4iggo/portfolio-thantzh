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

export const EducationContainer = styled.div`
	min-height: 100vh;
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
	margin-bottom: 2rem;
	animation: ${fadeInDown} 0.8s ease-out;

	@media (min-width: 768px) {
		margin-bottom: 4vw;
	}

	h1 {
		font-size: 2rem;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin-bottom: 1rem;
		letter-spacing: -0.02em;
		position: relative;
		display: inline-block;

		@media (min-width: 768px) {
			font-size: 3vw;
			margin-bottom: 1vw;
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
		font-size: 1rem;
		color: ${(props) => props.theme.textColor};
		opacity: 0.7;
		margin-top: 1rem;

		@media (min-width: 768px) {
			font-size: 1.3vw;
			margin-top: 1.5vw;
		}
	}
`;

export const Timeline = styled.div`
	position: relative;
	padding-left: 2rem;

	@media (min-width: 768px) {
		padding-left: 3vw;
	}

	&::before {
		content: "";
		position: absolute;
		left: 0;
		top: 1.5rem;
		bottom: 1.5rem;
		width: 3px;
		background: linear-gradient(
			180deg,
			${(props) => props.theme.primaryColor}40,
			${(props) => props.theme.primaryColor}80,
			${(props) => props.theme.primaryColor}40
		);
		border-radius: 2px;

		@media (min-width: 768px) {
			top: 2vw;
			bottom: 2vw;
			width: 0.3vw;
		}
	}
`;

export const EducationCard = styled.div<{ $delay?: number }>`
	position: relative;
	margin-bottom: 2rem;
	animation: ${fadeInLeft} 0.8s ease-out ${(props) => props.$delay || 0}s both;

	@media (min-width: 768px) {
		margin-bottom: 3vw;
	}

	&::before {
		content: "";
		position: absolute;
		left: -2.4rem;
		top: 1.2rem;
		width: 1rem;
		height: 1rem;
		background: ${(props) => props.theme.primaryColor};
		border: 3px solid ${(props) => props.theme.background};
		border-radius: 50%;
		box-shadow: 0 0 0 3px ${(props) => props.theme.primaryColor}30;
		z-index: 2;

		@media (min-width: 768px) {
			left: -3.5vw;
			top: 1.5vw;
			width: 1.2vw;
			height: 1.2vw;
			border: 0.3vw solid ${(props) => props.theme.background};
			box-shadow: 0 0 0 0.3vw ${(props) => props.theme.primaryColor}30;
		}
	}
`;

export const EducationContent = styled.div`
	background: ${(props) => props.theme.background};
	border: 2px solid ${(props) => props.theme.primaryColor}20;
	border-radius: 1rem;
	padding: 1.5rem;
	box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
	transition: all 0.4s ease;
	position: relative;
	overflow: hidden;

	@media (min-width: 768px) {
		border-radius: 1.5vw;
		padding: 2vw 2.5vw;
	}

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 4px;
		height: 100%;
		background: linear-gradient(
			180deg,
			${(props) => props.theme.primaryColor},
			${(props) => props.theme.primaryColor}60
		);

		@media (min-width: 768px) {
			width: 0.4vw;
		}
	}

	&:hover {
		transform: translateX(10px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
		border-color: ${(props) => props.theme.primaryColor}40;
	}
`;

export const EducationHeader = styled.div`
	margin-bottom: 1rem;
	padding-bottom: 0.75rem;
	border-bottom: 1px solid ${(props) => props.theme.primaryColor}15;

	@media (min-width: 768px) {
		margin-bottom: 1.5vw;
		padding-bottom: 1vw;
	}
`;

export const DegreeTitle = styled.h2`
	font-size: 1.25rem;
	font-weight: 700;
	color: ${(props) => props.theme.textColor};
	margin: 0 0 0.75rem 0;
	display: flex;
	align-items: center;
	gap: 0.75rem;

	@media (min-width: 768px) {
		font-size: 1.6vw;
		margin: 0 0 0.8vw 0;
		gap: 0.8vw;
	}

	.degree-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		background: linear-gradient(
			135deg,
			${(props) => props.theme.primaryColor}20,
			${(props) => props.theme.primaryColor}10
		);
		border-radius: 0.5rem;
		font-size: 1.1rem;

		@media (min-width: 768px) {
			width: 2.5vw;
			height: 2.5vw;
			border-radius: 0.5vw;
			font-size: 1.3vw;
		}
	}
`;

export const InstitutionInfo = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
	align-items: center;

	@media (min-width: 768px) {
		gap: 1vw;
	}
`;

export const Institution = styled.span`
	font-size: 1rem;
	font-weight: 600;
	color: ${(props) => props.theme.primaryColor};
	display: flex;
	align-items: center;
	gap: 0.5rem;

	@media (min-width: 768px) {
		font-size: 1.1vw;
		gap: 0.5vw;
	}

	&::before {
		content: "🎓";
		font-size: 0.95rem;

		@media (min-width: 768px) {
			font-size: 1vw;
		}
	}
`;

export const Duration = styled.span`
	font-size: 0.9rem;
	color: ${(props) => props.theme.textColor};
	opacity: 0.7;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.4rem 0.8rem;
	background: ${(props) => props.theme.primaryColor}08;
	border-radius: 2rem;
	border: 1px solid ${(props) => props.theme.primaryColor}20;

	@media (min-width: 768px) {
		font-size: 1vw;
		gap: 0.5vw;
		padding: 0.4vw 1vw;
		border-radius: 3vw;
	}

	&::before {
		content: "📅";
		font-size: 0.85rem;

		@media (min-width: 768px) {
			font-size: 0.9vw;
		}
	}
`;

export const HighlightsList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;

	@media (min-width: 768px) {
		gap: 1vw;
	}
`;

export const HighlightItem = styled.li`
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 0.75rem;
	font-size: 0.95rem;
	line-height: 1.6;
	color: ${(props) => props.theme.textColor};
	opacity: 0.9;
	position: relative;
	padding-left: 0.5rem;

	@media (min-width: 768px) {
		gap: 1vw;
		font-size: 1.05vw;
		line-height: 1.8;
		padding-left: 0.5vw;
	}

	&::before {
		content: "✓";
		color: ${(props) => props.theme.primaryColor};
		font-weight: 700;
		font-size: 1.1rem;
		display: flex;
		align-items: flex-start;
		padding-top: 0.1rem;

		@media (min-width: 768px) {
			font-size: 1.2vw;
			padding-top: 0.1vw;
		}
	}

	strong {
		color: ${(props) => props.theme.primaryColor};
		font-weight: 600;
	}
`;

export const DegreeBadge = styled.div`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem;
	background: linear-gradient(
		135deg,
		${(props) => props.theme.primaryColor}15,
		${(props) => props.theme.primaryColor}08
	);
	border: 1px solid ${(props) => props.theme.primaryColor}40;
	color: ${(props) => props.theme.primaryColor};
	border-radius: 2rem;
	font-size: 0.85rem;
	font-weight: 600;
	margin-top: 0.75rem;
	transition: all 0.3s ease;

	@media (min-width: 768px) {
		gap: 0.5vw;
		padding: 0.5vw 1.2vw;
		border-radius: 4vw;
		font-size: 0.9vw;
		margin-top: 1vw;
	}

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px ${(props) => props.theme.primaryColor}30;
	}
`;

export const SummarySection = styled.div`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.primaryColor}10,
		${(props) => props.theme.primaryColor}05
	);
	border: 2px solid ${(props) => props.theme.primaryColor}30;
	border-radius: 1rem;
	padding: 2rem;
	margin-top: 2rem;
	text-align: center;
	animation: ${fadeInUp} 1s ease-out 1s both;

	@media (min-width: 768px) {
		border-radius: 1.5vw;
		padding: 2.5vw;
		margin-top: 3vw;
	}

	h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;

		@media (min-width: 768px) {
			font-size: 1.8vw;
			margin-bottom: 1vw;
			gap: 1vw;
		}
	}

	p {
		font-size: 1rem;
		line-height: 1.6;
		color: ${(props) => props.theme.textColor};
		opacity: 0.9;
		margin: 0;

		@media (min-width: 768px) {
			font-size: 1.1vw;
			line-height: 1.8;
		}
	}
`;
