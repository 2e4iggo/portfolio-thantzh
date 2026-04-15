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

export const ProjectsContainer = styled.div`
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

export const FilterSection = styled.div`
	display: flex;
	justify-content: center;
	gap: 1vw;
	margin-bottom: 3vw;
	flex-wrap: wrap;
	animation: ${fadeIn} 1s ease-out 0.3s both;
`;

export const FilterButton = styled.button<{ $active?: boolean }>`
	padding: 0.8vw 1.8vw;
	border-radius: 5vw;
	border: 1.5px solid ${(props) => props.theme.primaryColor}40;
	background: ${(props) =>
		props.$active
			? `linear-gradient(135deg, ${props.theme.primaryColor}, ${props.theme.primaryColor}CC)`
			: "transparent"};
	color: ${(props) =>
		props.$active ? props.theme.white : props.theme.primaryColor};
	font-size: 1vw;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 5px 15px ${(props) => props.theme.primaryColor}30;
		border-color: ${(props) => props.theme.primaryColor}60;
		background: ${(props) =>
			props.$active
				? `linear-gradient(135deg, ${props.theme.primaryColor}, ${props.theme.primaryColor}CC)`
				: `${props.theme.primaryColor}15`};
	}
`;

export const ProjectsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	gap: 2.5vw;
	animation: ${fadeInUp} 1s ease-out 0.5s both;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const ProjectCard = styled.div`
	background: ${(props) => props.theme.background};
	border: 2px solid ${(props) => props.theme.primaryColor}20;
	border-radius: 1.5vw;
	padding: 2vw;
	box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
	transition: all 0.4s ease;
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 1.2vw;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
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

		.project-title {
			color: ${(props) => props.theme.primaryColor};
		}
	}

	.project-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1vw;
	}

	.project-title {
		font-size: 1.5vw;
		font-weight: 700;
		color: ${(props) => props.theme.textColor};
		margin: 0;
		transition: color 0.3s ease;
		flex: 1;
	}

	.status-badge {
		padding: 0.4vw 1vw;
		border-radius: 3vw;
		font-size: 0.8vw;
		font-weight: 600;
		white-space: nowrap;
		text-transform: capitalize;

		&.completed {
			background: linear-gradient(135deg, #10b98115, #10b98108);
			border: 1px solid #10b98140;
			color: #059669;
		}

		&.in-progress {
			background: linear-gradient(135deg, #f59e0b15, #f59e0b08);
			border: 1px solid #f59e0b40;
			color: #d97706;
		}

		&.planned {
			background: linear-gradient(135deg, #6366f115, #6366f108);
			border: 1px solid #6366f140;
			color: #4f46e5;
		}
	}

	.project-description {
		font-size: 1vw;
		line-height: 1.8;
		color: ${(props) => props.theme.textColor};
		opacity: 0.85;
		flex: 1;
	}

	.project-meta {
		display: flex;
		flex-direction: column;
		gap: 0.8vw;
		margin-top: auto;
	}

	.project-dates {
		font-size: 0.9vw;
		color: ${(props) => props.theme.textColor};
		opacity: 0.6;
		display: flex;
		align-items: center;
		gap: 0.5vw;
	}
`;

export const TechnologiesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.6vw;
`;

export const TechBadge = styled.span`
	background: linear-gradient(
		135deg,
		${(props) => props.theme.primaryColor}12,
		${(props) => props.theme.primaryColor}06
	);
	border: 1px solid ${(props) => props.theme.primaryColor}30;
	color: ${(props) => props.theme.primaryColor};
	padding: 0.4vw 1vw;
	border-radius: 3vw;
	font-size: 0.85vw;
	font-weight: 500;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 3px 10px ${(props) => props.theme.primaryColor}20;
		border-color: ${(props) => props.theme.primaryColor}50;
	}
`;

export const ProjectLinks = styled.div`
	display: flex;
	gap: 1vw;
	margin-top: 0.5vw;

	a {
		display: flex;
		align-items: center;
		gap: 0.5vw;
		padding: 0.7vw 1.5vw;
		border-radius: 5vw;
		font-size: 0.95vw;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.3s ease;

		&.live-demo {
			background: ${(props) => props.theme.primaryColor};
			color: ${(props) => props.theme.white};
			box-shadow: 0 4px 15px ${(props) => props.theme.primaryColor}30;

			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 6px 20px ${(props) => props.theme.primaryColor}40;
				opacity: 0.9;
			}
		}

		&.github {
			background: transparent;
			color: ${(props) => props.theme.primaryColor};
			border: 1.5px solid ${(props) => props.theme.primaryColor};

			&:hover {
				transform: translateY(-2px);
				background: ${(props) => props.theme.primaryColor}10;
				box-shadow: 0 4px 15px ${(props) => props.theme.primaryColor}20;
			}
		}
	}
`;

export const EmptyState = styled.div`
	text-align: center;
	padding: 4vw;
	color: ${(props) => props.theme.textColor};
	opacity: 0.6;
	font-size: 1.2vw;
	grid-column: 1 / -1;
`;

export const StatsBar = styled.div`
	display: flex;
	justify-content: center;
	gap: 3vw;
	margin-bottom: 3vw;
	padding: 2vw;
	background: ${(props) => props.theme.primaryColor}08;
	border-radius: 1vw;
	border: 1px solid ${(props) => props.theme.primaryColor}20;
	animation: ${fadeIn} 1s ease-out 0.2s both;
`;

export const StatItem = styled.div`
	text-align: center;

	.stat-number {
		font-size: 2vw;
		font-weight: 700;
		color: ${(props) => props.theme.primaryColor};
		margin-bottom: 0.3vw;
	}

	.stat-label {
		font-size: 0.9vw;
		color: ${(props) => props.theme.textColor};
		opacity: 0.7;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}
`;
