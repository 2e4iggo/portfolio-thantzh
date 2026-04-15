import styled from "styled-components";

export const AboutMeContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	position: relative;
	padding: 1rem 0.5rem;

	@media (min-width: 768px) {
		gap: 1vw;
		padding: 0;
	}

	.name {
		text-align: center;
		font-size: 1.5rem;
		margin-top: 0.75rem;
		font-weight: 600;

		@media (min-width: 768px) {
			font-size: 1.9vw;
			margin-top: 1vw;
		}
	}

	.title {
		text-align: center;
		font-size: 1.2rem;
		opacity: 0.6;
		font-weight: bold;

		@media (min-width: 768px) {
			font-size: 1.7vw;
		}
	}

	.summary {
		text-align: center;
		line-height: 1.6;
		width: 90%;
		margin: 0.75rem auto 1.5rem auto;
		font-size: 0.9rem;

		@media (min-width: 768px) {
			line-height: 2;
			width: 88%;
			margin: 1vw auto 2vw auto;
			font-size: 1rem;
		}
	}
`;

export const ProfilePicture = styled.div`
	width: 120px;
	height: 120px;
	position: relative;
	border-radius: 100%;
	border-bottom: 4px solid ${(props) => props.theme.primaryColor};
	border-right: 4px solid ${(props) => props.theme.primaryColor};
	
	@media (min-width: 768px) {
		width: 14vw;
		height: 14vw;
	}
	
	img {
		border-radius: 100%;
		object-fit: cover;
		border-bottom: 4px solid ${(props) => props.theme.white};
		border-right: 4px solid ${(props) => props.theme.white};
		width: 100%;
		height: 100%;
	}
`;

export const SocailLink = styled("a")<{ $backgroundColor?: string }>`
	position: absolute;
	background-color: ${({ $backgroundColor, theme }) =>
		$backgroundColor || theme.white};
	border-radius: 50%;
	z-index: 10;
	width: 2rem;
	height: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 4px 8px rgba(0,0,0, .95);
	transition: transform .3s ease, box-shadow .3s ease;

	@media (min-width: 768px) {
		width: 2.5vw;
		height: 2.5vw;
	}

	&:hover{
		transform: scale(1.2);
		box-shadow: 0 8px 16px rgba(0,0,0, .95);
	}

	&.socialLink_0{
		left: -10%;
		bottom: 28%;
	}
	&.socialLink_1{
		left: -6%;
		bottom: 62%;
	}
	&.socialLink_2{
		left: 17%;
		bottom: 86%;
	}
	&.socialLink_3{
		left: 48%; 
		bottom: 93%;
	}
`;

export const CallToActionButtons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;

	@media (min-width: 768px) {
		gap: 0.8vw;
	}

	a {
		&:hover {
			opacity: 0.7;
		}
	}

	.icon {
		border: 2px solid ${(props) => props.theme.primaryColor};
		height: 2.5rem;
		width: 2.5rem;
		border-radius: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;

		@media (min-width: 768px) {
			height: 3vw;
			width: 3vw;
		}
	}

	button {
		background-color: ${(props) => props.theme.primaryColor};
		color: ${(props) => props.theme.white};
		height: 2.5rem;
		padding: 0 1.25rem;
		border-radius: 2rem;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
		font-size: 0.9rem;

		@media (min-width: 768px) {
			height: 3vw;
			padding: 0 1.5vw;
			border-radius: 4vw;
			font-size: 1rem;
		}

		&:hover {
			opacity: 0.7;
			cursor: pointer;
		}
	}
`;
