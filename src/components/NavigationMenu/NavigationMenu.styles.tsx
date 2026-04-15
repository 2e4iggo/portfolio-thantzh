import Link from "next/link";
import styled from "styled-components";

export const NavigationMenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	position: absolute;
	right: 0;
	top: 0;
	background-color: ${(props) => props.theme.gray_1};
	border-radius: 0 0 50vw 50vw;
	padding-top: 1rem;
	width: 3rem;
	z-index: 30 !important;
	transform: translateX(50%);

	@media (min-width: 768px) {
		gap: 1vw;
		padding-top: 1.5vw;
		width: 3vw;
	}

	.tooltip {
		position: absolute;
		left: 1rem;
		top: -0.3rem;
		display: none;
		padding: 0.5rem 1rem;
		background-color: ${(props) => props.theme.black};
		color: ${(props) => props.theme.white};
		font-size: 0.75rem;
		white-space: nowrap;
		border-radius: 2rem;

		@media (min-width: 768px) {
			left: 1vw;
			top: -0.3vw;
			padding: 0.5vw 1vw;
			font-size: 0.6vw;
			border-radius: 50vw;
		}
	}
`;

export const NavigationMenuAction = styled.button`
	background-color: transparent;
	opacity: .8;
	transition: transform .2s ease;

	&:hover{
		cursor: pointer;
		opacity: 1;
		transform: scale(1.2);

		.tooltip{
			position: absolute;
			display:flex;
			font-size: 0.75rem;

			@media (min-width: 768px) {
				font-size: 0.6vw;
			}
		}
	}
`

export const NavigationMenusBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	border-top: 5px solid ${(props) => props.theme.background};
	background-color: ${(props) => props.theme.gray_1};
	width: 100%;
	padding: 0.75rem 0 1rem 0;
	border-radius: 50vw;

	@media (min-width: 768px) {
		gap: 1.5vw;
		padding: 1vw 0 1.5vw 0;
	}
`;

export const NavigationMenuItem = styled(Link)`
	color: ${(props) => props.theme.black};
	opacity: 0.3;
	transition: transform 0.3s ease;
	position: relative;

	&:hover {
		cursor: pointer;
		opacity: 1;
		transform: scale(1.2);

		.tooltip {
			display: flex;
			font-size: 0.75rem;

			@media (min-width: 768px) {
				font-size: 0.6vw;
			}
		}
	}

	&.active {
		color: ${(props) => props.theme.black};
		opacity: 1;
		transform: scale(1.5);
	}
`;

export const AiChatAction = styled("div")`
	background-color: ${(props) => props.theme.primaryColor};
	width: 100%;
	padding: 0.75rem 0 1rem 0;
	border-bottom-left-radius: 1.5rem;
	border-bottom-right-radius: 1.5rem;
	opacity: 1;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: 768px) {
		padding: 0.9vw 0 1vw 0;
		border-bottom-left-radius: 2vw;
		border-bottom-right-radius: 2vw;
	}

	&:hover {
		transform: scale(1);
		cursor: pointer;
	}

	.chatBox {
		background-color: ${(props) => props.theme.background};
		width: 90vw;
		position: absolute;
		left: 120%;
		top: 20%;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.65);
		border-radius: 1rem;

		@media (min-width: 768px) {
			width: 20vw;
			border-radius: 1vw;
		}

		&:hover {
			cursor: default;
		}
	}

	.chatBox.chatBoxHidden {
		display: none;
	}
`;
