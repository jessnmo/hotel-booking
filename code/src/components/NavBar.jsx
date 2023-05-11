import styled from 'styled-components';

const Nav = styled.div`
	height: 50px;
	background-color: #003580;
	display: flex;
	justify-content: center;
`;

const NavBarContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.h1`
	font-weight: 700;
	font-size: 1.5em;
`;

const NavItems = styled.div``;

const NavButtons = styled.button`
	margin: 20px;
	border: none;
	padding: 5px 10px;
	cursor: pointer;
	color: #003580;
`;

const NavBar = () => {
	return (
		<Nav>
			<NavBarContainer>
				<Logo>Booking</Logo>
				<NavItems>
					<NavButtons>Register</NavButtons>
					<NavButtons>Log In</NavButtons>
				</NavItems>
			</NavBarContainer>
		</Nav>
	);
};

export default NavBar;
