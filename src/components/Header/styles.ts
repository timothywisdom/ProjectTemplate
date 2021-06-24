import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import media from "../../config/media";

export const HeaderContainer = styled.header`
	background-color: #282c34;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export const Logo = styled.img`
	height: 40vmin;
	pointer-events: none;

	${media.watch} {
		display: none;
	}

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

export const Navigation = styled.nav`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	margin: 0;
	padding: 0;
	background: #44484f;
`;

export const MenuList = styled.ul`
	display: flex;
	justify-content: flex-start;
	width: 100%;
	margin: 0;
	padding: 0;
	background: #44484f;
`;

export const SecondaryMenuList = styled.ul`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	margin: 0;
	padding: 0;
	background: #44484f;
`;

export const MenuListItem = styled.li`
	color: white;
	list-style-type: none;
`;

export const MenuListItmeLink = styled(Link)`
	color: white;
	display: block;
	padding: 10px;
	text-decoration: none;

	&:hover,
	&:focus,
	&:active,
	&.active {
		color: #0c0c0c;
		background: #858585;
		text-decoration: none;
	}
`;
