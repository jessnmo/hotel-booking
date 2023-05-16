import NavBar from '../components/NavBar';
import Header from '../components/Header';
import styled from 'styled-components';
import Featured from '../components/Featured';
import PropertyList from '../components/PropertyList';

const DisplayContainer = styled.div`
	display: flex;
	margin-top: 3em;
	flex-direction: column;
	align-items: center;
	gap: 2em;
`;

const HomeTitle = styled.h1`
	width: 1024px;
	font-size: 1.5em;
`;

const Home = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<DisplayContainer>
				<Featured />
				<HomeTitle>Browse by property type</HomeTitle>
				<PropertyList />
			</DisplayContainer>
		</div>
	);
};

export default Home;
