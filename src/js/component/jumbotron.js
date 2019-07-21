import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div>
				<div
					className="jumbotron mx-auto shadow text-center"
					style={{ width: "75%", marginTop: "100px" }}>
					<h1 className="display-4" style={{ fontSize: "75px" }}>
						A <span className="warm">Heitt</span> Welcome!
					</h1>
					<p className="lead">
						Explore your ideal journey by interest How Far You Can
						Go
					</p>

					<div>
						<img
							className="shadow rounded"
							style={{
								width: "600px",
								height: "200px",
								marginBottom: "20px"
							}}
							src="https://images.unsplash.com/photo-1517252334236-20f9270f28ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
							alt="iceland"
						/>
					</div>
					<a
						className="btn btn-primary btn-lg"
						href="#"
						role="button">
						Explore!
					</a>
				</div>
			</div>
		);
	}
}
