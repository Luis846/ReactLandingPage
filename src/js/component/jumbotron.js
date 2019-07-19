import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div>
				<div
					className="jumbotron mt-4 mx-auto shadow"
					style={{ width: "75%" }}>
					<h1 className="display-4" style={{ fontSize: "75px" }}>
						A <span className="warm">Warm</span> Welcome!
					</h1>
					<p className="lead">
						This is a simple hero unit, a simple jumbotron-style
						component for calling extra attention to featured
						content or information.
					</p>

					<p>
						It uses utility classes for typography and spacing to
						space content out within the larger container.
					</p>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Call to action!
					</a>
				</div>
			</div>
		);
	}
}
