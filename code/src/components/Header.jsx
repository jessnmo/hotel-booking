import styled from 'styled-components';
import { RiHotelBedFill } from 'react-icons/ri';
import {
	BsCarFrontFill,
	BsFillTaxiFrontFill,
	BsAirplaneFill,
	BsFillPersonFill,
} from 'react-icons/bs';
import { MdOutlineAttractions } from 'react-icons/md';
import { BiCalendar } from 'react-icons/bi';
import { DateRange } from 'react-date-range';

const HeaderWrapper = styled.div`
	background-color: #003580;
	color: white;
	display: flex;
	justify-content: center;
	position: relative;
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

const HeaderSearchContainer = styled.form`
	height: 30px;
	background-color: white;
	border: 3px solid #febb00;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0;
	padding-left: 10px;
	position: absolute;
	bottom: -25px;
	width: 100%;
	max-width: 1024px;
`;

const HeaderSearchItems = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

const SearchInput = styled.input`
	border: none;
	outline: none;
	font-size: 1em;
`;

const SearchIcon = styled.div`
	color: #6b6b6b;
`;

/* const HeaderSearchBtn = styled.button`
    
` */

const HeaderSearchSpan = styled.span`
	color: #6b6b6b;
	cursor: pointer;
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

				<HeaderSearchContainer>
					<HeaderSearchItems>
						<SearchIcon>
							<RiHotelBedFill />
						</SearchIcon>
						<SearchInput
							type="text"
							placeholder="Where are you going?"
						></SearchInput>
					</HeaderSearchItems>

					<HeaderSearchItems>
						<SearchIcon>
							<BiCalendar />
						</SearchIcon>
						{/* <SearchInput
								type="date"
								placeholder="Check-in date -- Check-out date"
							></SearchInput> */}
						<HeaderSearchSpan>Check-in date -- Check-out date</HeaderSearchSpan>
					</HeaderSearchItems>

					<HeaderSearchItems>
						<SearchIcon>
							<BsFillPersonFill />
						</SearchIcon>
						{/* <SearchInput
								type="text"
								placeholder="Where are you going?"
							></SearchInput> */}
						<HeaderSearchSpan>2 adults; 0 children; 1 room</HeaderSearchSpan>
					</HeaderSearchItems>
					<HeaderBtn>Search</HeaderBtn>
				</HeaderSearchContainer>
			</HeaderContainer>
		</HeaderWrapper>
	);
};

export default Header;
