import { FC } from "react";
import logo from "./resources/logo.svg";
import {
	HeaderContainer,
	Logo,
	MenuList,
	MenuListItem,
	MenuListItmeLink,
} from "./styles";

const Header: FC = () => {
	return (
		<HeaderContainer>
			<Logo src={logo} alt="logo" />
			<MenuList>
				<MenuListItem>
					<MenuListItmeLink to="/home">Home</MenuListItmeLink>
				</MenuListItem>
				<MenuListItem>
					<MenuListItmeLink to="/about">About</MenuListItmeLink>
				</MenuListItem>
			</MenuList>
		</HeaderContainer>
	);
};

export default Header;
