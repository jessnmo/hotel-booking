import styled from 'styled-components';

const FooterWrapper = styled.div`
	width: 100%;
	font-size: 12px;
`;

const FooterListWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 50px;
`;

const FooterList = styled.ul`
	list-style: none;
	padding: 0;
`;

const FooterItems = styled.li`
	color: #0171c2;
	:hover {
		color: #ca7b42;
	}
	padding-bottom: 10px;
	cursor: pointer;
`;

const Copyright = styled.div`
	display: flex;
	justify-content: center;
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<FooterListWrapper>
				<FooterList>
					<FooterItems>Countries</FooterItems>
					<FooterItems>Regions</FooterItems>
					<FooterItems>Cities</FooterItems>
					<FooterItems>Districts</FooterItems>
					<FooterItems>Airports</FooterItems>
					<FooterItems>Hotels</FooterItems>
					<FooterItems>Places of interest</FooterItems>
				</FooterList>

				<FooterList>
					<FooterItems>Homes</FooterItems>
					<FooterItems>Apartments</FooterItems>
					<FooterItems>Resorts</FooterItems>
					<FooterItems>Villas</FooterItems>
					<FooterItems>Hostels</FooterItems>
					<FooterItems>B&Bs</FooterItems>
					<FooterItems>Guest houses</FooterItems>
				</FooterList>

				<FooterList>
					<FooterItems>Unique places to stay</FooterItems>
					<FooterItems>All destinations</FooterItems>
					<FooterItems>All flight destinations</FooterItems>
					<FooterItems>All car hire locations</FooterItems>
					<FooterItems>Discover</FooterItems>
					<FooterItems>Reviews</FooterItems>
					<FooterItems>Discover monthly stays</FooterItems>
				</FooterList>

				<FooterList>
					<FooterItems>Countries</FooterItems>
					<FooterItems>Regions</FooterItems>
					<FooterItems>Cities</FooterItems>
					<FooterItems>Districts</FooterItems>
					<FooterItems>Airports</FooterItems>
					<FooterItems>Hotels</FooterItems>
					<FooterItems>Places of interest</FooterItems>
				</FooterList>

				<FooterList>
					<FooterItems>Countries</FooterItems>
					<FooterItems>Regions</FooterItems>
					<FooterItems>Cities</FooterItems>
					<FooterItems>Districts</FooterItems>
					<FooterItems>Airports</FooterItems>
					<FooterItems>Hotels</FooterItems>
					<FooterItems>Places of interest</FooterItems>
				</FooterList>
			</FooterListWrapper>
			<Copyright>Copyright © Jess Mo</Copyright>
		</FooterWrapper>
	);
};

export default Footer;
