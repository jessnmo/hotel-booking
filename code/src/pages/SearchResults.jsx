import NavBar from '../components/NavBar';
import Header from '../components/Header';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { format } from 'date-fns';

//This is the search result page, that's why we're showing the header a bit different, meaning a smaller margin because we don't see to see the search bar
//this will return the page when you clicked one of the search from search bar

const ResultsContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1.5em;
	margin: 1.3em 3em 0 3em;
`;

const ResultWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 3fr;
	grid-gap: 2em;
`;

const ResultSearchBar = styled.div`
	background-color: #febb00;
	padding: 10px;
	position: sticky;
	top: 10px;
	border-radius: 3px;
`;

const ResultDetails = styled.div``;

const SearchTitle = styled.h1`
	font-size: 20px;
	margin-bottom: 20px;
`;

const SearchForm = styled.form``;

const Label = styled.label``;

const Input = styled.input``;

const SearchResults = () => {
	const location = useLocation();
	console.log(location);

	const [destination, setDestination] = useState(location.state.destination); // we can see from the console that the destination is under state, and the whole object is location
	const [date, setDate] = useState(location.state.date); // we can see from the console that the destination is under state, and the whole object is location
	const [options, setOptions] = useState(location.state.options); // we can see from the console that the destination is under state, and the whole object is location

	return (
		<div>
			<NavBar />
			<Header type="search-results" />
			<ResultsContainer>
				<ResultWrapper>
					<ResultSearchBar>
						<SearchTitle>Search</SearchTitle>
						<SearchForm>
							<Label>Destination/property name</Label>
							<Input type="text" placeholder={destination}></Input>
						</SearchForm>
						<SearchForm>
							<Label>Check-in date</Label>
							<p>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
								date[0].endDate,
								'MM/dd/yyyy'
							)}`}</p>
						</SearchForm>
					</ResultSearchBar>
					<ResultDetails>Results</ResultDetails>
				</ResultWrapper>
			</ResultsContainer>
		</div>
	);
};

export default SearchResults;
