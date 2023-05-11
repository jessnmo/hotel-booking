import styled from 'styled-components';
import { RiHotelBedFill } from 'react-icons/ri';
import {
	BsCarFrontFill,
	BsFillTaxiFrontFill,
	BsAirplaneFill,
} from 'react-icons/bs';
import { MdOutlineAttractions } from 'react-icons/md';

const HeaderWrapper = styled.div`
	background-color: #003580;
	color: white;
	display: flex;
	justify-content: center;
`;

const HeaderContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	margin: 20px 0 100px 0;
`;

const HeaderList = styled.div`
	display: flex;
	gap: 40px;
	margin-bottom: 50px;
`;

const HeaderItems = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	padding: 10px 20px;
	border: 1px solid transparent;
	border-radius: 25px;

	&:hover {
		background-color: #21498b;
		border-radius: 25px;
	}

	&:active {
		border-color: white;
	}
`;

const HeaderTitle = styled.h2`
	font-size: 3em;
	color: white;
`;

const SubTitle = styled.p`
	color: white;
	font-size: 1.5em;
	margin: 2em 0;
`;

const HeaderBtn = styled.button`
	border: none;
	padding: 15px;
	font-size: 1em;
	color: white;
	font-weight: 800;
	background-color: #0171c2;
	cursor: pointer;
	&:hover {
		background-color: #00487a;
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderContainer>
				<HeaderList>
					<HeaderItems>
						<RiHotelBedFill />
						<span>Stays</span>
					</HeaderItems>
					<HeaderItems>
						<BsAirplaneFill />
						<span>Flights</span>
					</HeaderItems>
					<HeaderItems>
						<BsCarFrontFill />
						<span>Car Rentals</span>
					</HeaderItems>
					<HeaderItems>
						<MdOutlineAttractions />
						<span>Attractions</span>
					</HeaderItems>
					<HeaderItems>
						<BsFillTaxiFrontFill />
						<span>Airport Taxi</span>
					</HeaderItems>
				</HeaderList>
				<HeaderTitle>Sign in, save money</HeaderTitle>
				<SubTitle>
					Save 10% or more at participating properties. Just look for the blue
					Genius label
				</SubTitle>
				<HeaderBtn>Sign in or register</HeaderBtn>
			</HeaderContainer>
		</HeaderWrapper>
	);
};

export default Header;
