import React from "react";

export class Footer extends React.Component {
	render() {
		return (
			<div>
				<div className="card">
					<div className="card-header bg-dark mt-3" />
					<div className="card-body bg-dark">
						<blockquote className="blockquote mb-0 text-center text-white">
							<p>Copyright @ Your Website 2019</p>
						</blockquote>
					</div>
				</div>
			</div>
		);
	}
}
