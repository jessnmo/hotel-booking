import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

import styled from 'styled-components';
//import { FaLocationDot } from 'react-icons/fa';

const HotelContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const HotelWrapper = styled.div`
	width: 100%;
	max-width: 1024px;
	display: flex;
	flex-direction: column;
	gap: 10px;
	//position: relative;
`;

const Title = styled.h1``;

const HotelAddressContainer = styled.div``;

const HotelIMGContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const IMGWrapper = styled.div`
	width: 33%;
`;

const HotelImg = styled.img`
	width: 100%;
	object-fit: cover;
	cursor: pointer;
`;

const HotelDetails = styled.div``;

const HotelDescription = styled.div``;

const DescriptionText = styled.p``;

const Reserve = styled.div``;

const Hotel = () => {
	const photos = [
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1',
		},
		{
			src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1',
		},
	];

	return (
		<div>
			<NavBar />
			<Header />
			<HotelContainer>
				<HotelWrapper>
					<Title>XXX</Title>
					<HotelAddressContainer>
						{/* <FaLocationDot /> */}
						<span>LOCATION</span>
					</HotelAddressContainer>
					<span>-Excellent Location </span>
					<HotelIMGContainer>
						{photos.map((photo) => (
							<IMGWrapper>
								<HotelImg src={photo.src} alt="hotel_img" />
							</IMGWrapper>
						))}
					</HotelIMGContainer>

					<HotelDetails>
						<HotelDescription>
							<h1>XXX</h1>
							<DescriptionText>Description goes here</DescriptionText>
						</HotelDescription>
						<Reserve>
							<h1>Property Highlight</h1>
							<h2>Perfect for a 3-night stay!</h2>
							<span>
								Located in the real heart of Krakow, this property has an
								excellent location score of 9.8!
							</span>
							<h2>
								<b>$945</b> (9 nights)
							</h2>
							<button>Reserve or Book Now!</button>
						</Reserve>
					</HotelDetails>
				</HotelWrapper>
			</HotelContainer>
		</div>
	);
};

export default Hotel;
