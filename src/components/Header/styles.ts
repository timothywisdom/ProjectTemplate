import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Logo = styled.img`
	height: 40vmin;
	pointer-events: none;

	@media (prefers-reduced-motion: no-preference) {
		animation: App-logo-spin infinite 20s linear;
	}

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export const HeaderContainer = styled.header`
	background-color: #282c34;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export const MenuList = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	width: 100%;
	margin: 0;
	padding: 0;
	background: #44484f;
`;

export const MenuListItem = styled.li`
	color: white;
	padding: 10px;
	list-style-type: none;
`;

export const MenuListItmeLink = styled(Link)`
	color: white;

	&:hover,
	&:focus,
	&:active {
		color: #63beff;
	}
`;
