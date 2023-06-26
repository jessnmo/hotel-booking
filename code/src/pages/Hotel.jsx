import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import MailList from '../components/MailList';
import Footer from '../components/Footer';
import styled from 'styled-components';
import {
	BsPinMapFill,
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from 'react';

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

const HotelAddressContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

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

const HotelDetails = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	grid-gap: 10px;
`;

const HotelDescription = styled.div``;

const DescriptionText = styled.p`
	font-size: 16px;
	line-height: 1.5;
`;

const Reserve = styled.div`
	background-color: #e4f3ff;
	padding: 10px;
`;

const BiggerImg = styled.div``;

const Hotel = () => {
	const [biggerImgIndex, setBiggerImgIndex] = useState(0);
	const [openBiggerImg, setOpenBiggerImg] = useState(false);

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

	const handleBiggerImg = (i) => {
		setBiggerImgIndex(i);
		setOpenBiggerImg(true);
	};

	return (
		<div>
			<NavBar />
			<Header />
			<HotelContainer>
				{/* the bigger img container is above the multiple small img you see on the hotel page.
                It opens by condition, with buttons indicating going forward/back/close */}
				{openBiggerImg && (
					<BiggerImg>
						<BsFillArrowLeftCircleFill />
						<BsFillArrowRightCircleFill />
						<AiFillCloseCircle />
					</BiggerImg>
				)}
				<HotelWrapper>
					<Title>Cracow Central Aparthotel</Title>
					<HotelAddressContainer>
						<BsPinMapFill />
						<p>Kurniki 4, Old Town, 31-156 Kraków, Poland </p>
						<span style={{ color: '#0171c2' }}>- Excellent Location</span>
					</HotelAddressContainer>

					<HotelIMGContainer>
						{photos.map((photo, i) => (
							<IMGWrapper>
								<HotelImg
									onClick={handleBiggerImg}
									src={photo.src}
									alt="hotel_img"
								/>
							</IMGWrapper>
						))}
					</HotelIMGContainer>

					<HotelDetails>
						<HotelDescription>
							<h1 style={{ fontSize: '18px' }}>
								About Cracow Central Aparthotel
							</h1>
							<DescriptionText>
								You're eligible for a Genius discount at Cracow Central
								Aparthotel! To save at this property, all you have to do is sign
								in. Situated in Kraków in the Lesser Poland region, 500 metres
								to the main train station, Cracow Central Aparthotel features
								accommodation with free WiFi. The aparthotel offers a
								flat-screen TV and a private bathroom with free toiletries, a
								hair dryer and shower. A fridge and kettle are also available. A
								continental breakfast is served every morning at the property.
								St. Mary's Basilica is 850 metres from Cracow Central
								Aparthotel, while St. Florian's Gate is 400 metres from the
								property. The nearest airport is John Paul II International
								Kraków–Balice Airport, 17 km from the property. This is our
								guests' favourite part of Kraków, according to independent
								reviews. Couples particularly like the location — they rated it
								9.7 for a two-person trip.
							</DescriptionText>
						</HotelDescription>
						<Reserve>
							<h1 style={{ fontSize: '18px' }}>Property Highlight</h1>
							<h2 style={{ fontSize: '16px' }}>Perfect for a 3-night stay!</h2>
							<span style={{ fontSize: '12px' }}>
								Located in the real heart of Krakow, this property has an
								excellent location score of 9.8!
							</span>
							<h2 style={{ fontSize: '16px' }}>
								<b>$945</b> (9 nights)
							</h2>
							<button className="resultSearchBtn">Reserve or Book Now!</button>
						</Reserve>
					</HotelDetails>
				</HotelWrapper>
			</HotelContainer>
			<MailList />
			<Footer />
		</div>
	);
};

export default Hotel;
