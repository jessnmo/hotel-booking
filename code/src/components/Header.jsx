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
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
	margin: ${(props) =>
		props.type === 'search-results' ? '20px 0' : '20px 0 100px 0'};
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

const SubTitle = styled.h3`
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
	z-index: 2;
`;

const SearchInput = styled.input`
	border: none;
	outline: none;
	font-size: 1em;
`;

const SearchIcon = styled.div`
	color: #6b6b6b;
`;

const HeaderSearchSpan = styled.span`
	color: #6b6b6b;
	cursor: pointer;
`;

const Header = ({ type }) => {
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);

	const [openDatePicker, setOpenDatePicker] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		child: 0,
		room: 1,
	});
	const [openOptions, setOpenOptions] = useState(false);
	const [destination, setDestination] = useState('');

	const handleOption = (event, name, action) => {
		/* this function takes name of the option (in useState above) and the action(increase or decrease) as the argument
it takes the previous state(original state value), returns it, and if we wrap the name(adult,child, room) in an array
it will help us to find it in our original object in the state

it will find the name of in the array, and if the action is decrease, then it will +1. and of course
options[name]: it will find the value from the object, in this case it's 1, 0, 1*/
		event.preventDefault();
		event.stopPropagation();
		setOptions((prev) => {
			return {
				...prev,
				[name]: action === 'decrease' ? prev[name] - 1 : prev[name] + 1,
			};
		});
	};

	const navigate = useNavigate();

	const handleSearch = () => {
		navigate('/search', {
			state: {
				destination,
				date,
				options,
			},
		});
	};

	return (
		<HeaderWrapper>
			<HeaderContainer type={type}>
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

				{type !== 'search-results' && (
					<>
						<HeaderTitle>Sign in, save money</HeaderTitle>
						<SubTitle>
							Save 10% or more at participating properties. Just look for the
							blue Genius label
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
									onChange={(e) => setDestination(e.target.value)}
								></SearchInput>
							</HeaderSearchItems>

							<HeaderSearchItems>
								<SearchIcon>
									<BiCalendar />
								</SearchIcon>

								<HeaderSearchSpan
									onClick={() => setOpenDatePicker(!openDatePicker)}
								>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
									date[0].endDate,
									'MM/dd/yyyy'
								)}`}</HeaderSearchSpan>
								{openDatePicker && (
									<DateRange
										editableDateInputs={true}
										onChange={(item) => setDate([item.selection])}
										moveRangeOnFirstSelection={false}
										ranges={date}
										minDate={new Date()}
										className="date-range"
									/>
								)}
							</HeaderSearchItems>

							<HeaderSearchItems>
								<SearchIcon>
									<BsFillPersonFill />
								</SearchIcon>

								<HeaderSearchSpan
									onClick={() => setOpenOptions(!openOptions)}
								>{`${options.adult} adults · ${options.child} children · ${options.room} room`}</HeaderSearchSpan>

								{openOptions && (
									<div className="optionWrapper">
										<div className="optionItems">
											<span className="optionText">Adults</span>
											<div className="optionCounter">
												<button
													disabled={options.adult <= 1}
													className="optionCounterBtn"
													onClick={(event) =>
														handleOption(event, 'adult', 'decrease')
													}
												>
													-
												</button>
												<span className="optionCounterNum">
													{options.adult}
												</span>
												<button
													className="optionCounterBtn"
													onClick={(event) =>
														handleOption(event, 'adult', 'increase')
													}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItems">
											<span className="optionText">Children</span>
											<div className="optionCounter">
												<button
													disabled={options.child <= 0}
													className="optionCounterBtn"
													onClick={(event) =>
														handleOption(event, 'child', 'decrease')
													}
												>
													-
												</button>
												<span className="optionCounterNum">
													{options.child}
												</span>
												<button
													className="optionCounterBtn"
													onClick={(event) =>
														handleOption(event, 'child', 'increase')
													}
												>
													+
												</button>
											</div>
										</div>
										<div className="optionItems">
											<span className="optionText">Rooms</span>
											<div className="optionCounter">
												{/* we're passing here on the btn a function when you click it increase or decrease, depending on the variable we passed in (name, and the operation mode->increase or decrease) */}
												<button
													disabled={options.room <= 1}
													className="optionCounterBtn"
													onClick={(event) =>
														handleOption(event, 'room', 'decrease')
													}
												>
													-
												</button>
												<span className="optionCounterNum">{options.room}</span>
												<button
													className="optionCounterBtn"
													onClick={(event) =>
														handleOption(event, 'room', 'increase')
													}
												>
													+
												</button>
											</div>
										</div>
									</div>
								)}
							</HeaderSearchItems>
							<HeaderBtn onClick={handleSearch}>Search</HeaderBtn>
						</HeaderSearchContainer>
					</>
				)}
			</HeaderContainer>
		</HeaderWrapper>
	);
};

export default Header;
