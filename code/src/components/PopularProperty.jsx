import {
	PropertyContainer,
	PropertyItem,
	PropertyImg,
} from '../style/FeaturedStyle';
import styled from 'styled-components';

const Rating = styled.div`
	display: flex;
	gap: 5px;
`;

export const RatingBtn = styled.button`
	background-color: #003580;
	color: white;
	border: none;
	border-radius: 8px;
	border-bottom-left-radius: 0;
	padding: 4px;
`;

const PopularProperty = () => {
	return (
		<PropertyContainer>
			<PropertyItem>
				<PropertyImg
					src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
					alt="ApartHotel Stare Miasto"
				/>

				<h3 class="custom-h3">ApartHotel Stare Miasto</h3>
				<h4 class="custom-h4">Old Town, Poland, Krakow</h4>
				<p class="custom-p">
					Starting from <strong>$94</strong>
				</p>
				{/* </PropertyTitle> */}
				<Rating>
					<RatingBtn>8.7</RatingBtn>
					<p class="custom-p ">2,225 reviews</p>
				</Rating>
			</PropertyItem>
			<PropertyItem>
				<PropertyImg
					src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"
					alt="7Seasons Apartments Budapest"
				/>

				<h3 class="custom-h3">7Seasons Apartments Budapest</h3>
				<h4 class="custom-h4">06 Terézváros, Hungry, Budapest</h4>
				<p class="custom-p ">
					Starting from <strong>$121</strong>
				</p>

				<Rating>
					<RatingBtn>8.8</RatingBtn>
					<p class="custom-p ">7,886 reviews</p>
				</Rating>
			</PropertyItem>
			<PropertyItem>
				<PropertyImg
					src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"
					alt="Oriente Palace Apartments"
				/>

				<h3 class="custom-h3">Oriente Palace Apartments</h3>
				<h4 class="custom-h4">Centro,Spain,Madrid</h4>

				<p class="custom-p ">
					Starting from <strong>$144</strong>
				</p>
				<Rating>
					<RatingBtn>8.9</RatingBtn>
					<p class="custom-p ">2,761 reviews</p>
				</Rating>
			</PropertyItem>
			<PropertyItem>
				<PropertyImg
					src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1"
					alt="numa | Vita Apartments"
				/>

				<h3 class="custom-h3">numa | Vita Apartments</h3>
				<h4 class="custom-h4">Fortezza da Basso,Italy, Florence</h4>
				<p class="custom-p ">
					Starting from <strong>$364</strong>
				</p>
				<Rating>
					<RatingBtn>9.3</RatingBtn>
					<p class="custom-p ">1,046 reviews</p>
				</Rating>
			</PropertyItem>
			{/* <PropertyItem>
				<PropertyImg
					src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
					alt="ApartHotel Stare Miasto"
				/>

				<h3 class="custom-h3">ApartHotel Stare Miasto</h3>
				<h4 class="custom-h4">Old Town, Poland, Krakow</h4>
				<p class="custom-p ">
					Starting from <strong>$94</strong>
				</p>
				<Rating>
					<RatingBtn>8.7</RatingBtn>
					<p class="custom-p ">2,225 reviews</p>
				</Rating>
			</PropertyItem> */}
		</PropertyContainer>
	);
};

export default PopularProperty;
