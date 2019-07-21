import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Nav extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-dark shadow">
					<a className="navbar-brand text-white" href="#">
						Nordic Travels
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarNav" />

					<ul
						className="navbar-nav"
						style={{ paddingRight: "160px" }}>
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Services
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}
