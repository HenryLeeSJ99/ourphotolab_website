import "./footer.css";

export default function Footer(){
return(
	<div className="footer">

		<div className="footer-info">
			<div className="footer-info-center">
				<div className="footer-info-email">
					henrylee040799@gmail.com
				</div>
			</div>
			<div className="footer-info-right">
				<div className="footer-info-right-items">
					<span style={{color: "#b6c4c3",display:"block",alignItems:"end"}}>
						<p>Legal & Payments & Booking </p> <p>and Cancellation Policy</p>
					</span>
					
				</div>
				<div className="footer-info-right-items">
					Ourphotolab ©
				</div>
			</div>
		</div>
	</div>
)
};