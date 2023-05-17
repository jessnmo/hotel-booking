import styled from 'styled-components';

const MailContainer = styled.div`
	background-color: #003580;
	width: 100%;
	//max-width: 1024px;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	padding: 2em;
`;

const MailTitle = styled.h1`
	font-size: 1.5em;
	font-weight: 500;
	margin: 0;
`;

const MailDescription = styled.h1`
	font-size: 1em;
	font-weight: 500;
`;

const MailForm = styled.form``;

const MailInput = styled.input`
	width: 300px;
	height: 30px;
	padding: 10px;
	border: none;
	border-radius: 5px;
	margin-right: 10px;
	font-size: 16px;
`;

const SubscribeBtn = styled.button`
	height: 50px;
	width: 100px;
	color: white;
	background-color: #0171c2;
	border: none;
	border-radius: 5px;
	font-weight: 600;
	font-size: 16px;
	cursor: pointer;
`;

const MailList = () => {
	return (
		<MailContainer>
			<MailTitle>Save time, save money!</MailTitle>
			<MailDescription>
				Sign up and we'll send the best deals to you
			</MailDescription>
			<MailForm>
				<MailInput type="text" placeholder="You email address"></MailInput>
				<SubscribeBtn>Subscribe</SubscribeBtn>
			</MailForm>
		</MailContainer>
	);
};

export default MailList;
