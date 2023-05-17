import NavBar from '../components/NavBar';
import Header from '../components/Header';
import styled from 'styled-components';
import Featured from '../components/Featured';
import PropertyType from '../components/PropertyType';
import PopularProperty from '../components/PopularProperty';

const DisplayContainer = styled.div`
	display: flex;
	margin-top: 3em;
	flex-direction: column;
	align-items: center;
	//gap: 2em;
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
				<HomeTitle>Trending destinations</HomeTitle>
				<Featured />
				<HomeTitle>Browse by property type</HomeTitle>
				<PropertyType />
				<HomeTitle>Homes guests love</HomeTitle>
				<PopularProperty />
			</DisplayContainer>
		</div>
	);
};

export default Home;
