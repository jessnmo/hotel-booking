const ResultDetails = () => {
	return (
		<div className="detailWrapper">
			<img
				src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
				alt=""
				className="resultIMG"
			/>
			<div className="detailDescription">
				<h1 className="detailTitle">Tower Street Apartments</h1>
				<span className="detailDistance">500m from center</span>
				<span className="detailTaxi">Free airport taxi</span>
				<span className="detailSubtitle">
					Studio Apartment with Air conditioning
				</span>
				<span className="detailFeatures">
					Entire studio • 1 bathroom • 21m² 1 full bed
				</span>
				<span className="detailCancel">Free cancellation </span>
				<span className="detailCancelDescription">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="detail">Details</div>
		</div>
	);
};

export default ResultDetails;
