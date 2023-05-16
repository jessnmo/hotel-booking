//this is a component holding the list of featured cities you see on the home page
import styled from 'styled-components';

const FeaturedContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	display: flex;
	justify-content: space-between;
	gap: 1.5em;
	z-index: 1;
`;

const FeaturedItems = styled.div`
	position: relative;
	overflow: hidden;
`;

const FeaturedImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

const FeatureTitle = styled.div`
	position: absolute;
	top: 1.2em;
	left: 1em;
	font-weight: 700;
	color: white;
	text-shadow: 3px 3px 5px rgba(5, 5, 5, 0.3);
`;

const Featured = () => {
	return (
		<FeaturedContainer>
			<FeaturedItems>
				<FeaturedImg
					src="https://cf.bstatic.com/xdata/images/city/600x600/976539.jpg?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o="
					alt="Amsterdam"
				/>
				<FeatureTitle>
					<h1>Amsterdam 🇳🇱</h1>
					<h2>xxx properties</h2>
				</FeatureTitle>
			</FeaturedItems>
			<FeaturedItems>
				<FeaturedImg
					src="https://cf.bstatic.com/xdata/images/city/600x600/613088.jpg?k=a370ac3fb385fb211b35a79a42b0e968ddb458be37108af476c558bf4cedc1f3&o="
					alt="Paris"
				/>
				<FeatureTitle>
					<h1>Paris 🇫🇷</h1>
					<h2>xxx properties</h2>
				</FeatureTitle>
			</FeaturedItems>
			<FeaturedItems>
				<FeaturedImg
					src="https://cf.bstatic.com/xdata/images/city/600x600/976952.jpg?k=4c536b3833e5f6721ff5f89fa4f15d8f50fd5cd4a963060414078428aa67a6d5&o="
					alt="London"
				/>
				<FeatureTitle>
					<h1>London 🇬🇧</h1>
					<h2>xxx properties</h2>
				</FeatureTitle>
			</FeaturedItems>
		</FeaturedContainer>
	);
};

export default Featured;
