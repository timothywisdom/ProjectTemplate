import React from "react";
import useSelector from "../../hooks/useSelector";
import { setAuthenticatedState } from "../../store/user/userActionCreators";
import logo from "./resources/logo.svg";
import {
	HeaderContainer,
	Logo,
	MenuList,
	MenuListItem,
	MenuListItmeLink,
	Navigation,
	SecondaryMenuList,
} from "./styles";
import { useLocation } from "react-router-dom";
import useActions from "../../hooks/useActions";

const Header: React.FC = () => {
	const store = useSelector((state) => ({
		authenticatedState: state.user.authenticatedState,
	}));
	const actions = useActions({ setAuthenticatedState });
	let location = useLocation();

	return (
		<HeaderContainer>
			<Logo src={logo} alt="logo" />
			<Navigation>
				<MenuList>
					<MenuListItem>
						<MenuListItmeLink
							to="/home"
							className={
								location.pathname === "/home" ? "active" : ""
							}
						>
							Home
						</MenuListItmeLink>
					</MenuListItem>
					<MenuListItem>
						<MenuListItmeLink
							to="/fetch"
							className={
								location.pathname === "/fetch" ? "active" : ""
							}
						>
							Fetch
						</MenuListItmeLink>
					</MenuListItem>
				</MenuList>
				<SecondaryMenuList>
					<MenuListItem>
						{store.authenticatedState === "Unauthenticated" && (
							<MenuListItmeLink
								to="/home"
								onClick={() => {
									actions.setAuthenticatedState(
										"Authenticated"
									);
								}}
							>
								Log In
							</MenuListItmeLink>
						)}
						{store.authenticatedState === "Authenticated" && (
							<MenuListItmeLink
								to="/home"
								onClick={() => {
									actions.setAuthenticatedState(
										"Unauthenticated"
									);
								}}
							>
								Log Out
							</MenuListItmeLink>
						)}
					</MenuListItem>
				</SecondaryMenuList>
			</Navigation>
		</HeaderContainer>
	);
};

export default Header;
