import styled from 'styled-components';

export const PropertyContainer = styled.div`
	width: 100%;
	max-width: 1024px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 2em;
	gap: 1em;
`;

export const PropertyItem = styled.div`
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const PropertyImg = styled.img`
	width: 100%;
	object-fit: cover;
`;

export const PropertyTitle = styled.div`
	line-height: 15px;
`;
