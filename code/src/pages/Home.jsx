import NavBar from '../components/NavBar';
import Header from '../components/Header';
import styled from 'styled-components';
import Featured from '../components/Featured';

const DisplayContainer = styled.div`
	display: flex;
	margin-top: 3em;
	flex-direction: column;
	align-items: center;
	gap: 2em;
`;

const Home = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<DisplayContainer>
				<Featured />
			</DisplayContainer>
		</div>
	);
};

export default Home;
