import React from "react";

export class Form extends React.Component {
	render() {
		return (
			<div className="bg-white rounded mt-5 forms mx-auto shadow">
				<form>
					<h1 className="text-center">Contact Us!</h1>
					<div className="dropdown-divider" />
					<div className="form-group row mt-5">
						<div className="col-md-4 mb-3">
							<label htmlFor="validationDefault01">
								First name
							</label>
							<input
								type="text"
								className="form-control"
								id="validationDefault01"
								placeholder="First name"
								value=""
								required
							/>
						</div>
						<div className="col-md-4 mb-3">
							<label htmlFor="validationDefault02">
								Last name
							</label>
							<input
								type="text"
								className="form-control"
								id="validationDefault02"
								placeholder="Last name"
								value=""
								required
							/>
						</div>
						<div className="form-group col-md-4 mb-3">
							<label htmlFor="exampleDropdownFormEmail1">
								Email address
							</label>
							<input
								type="email"
								className="form-control"
								id="exampleDropdownFormEmail1"
								placeholder="email@example.com"
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="col-md-6 mb-3">
							<label htmlFor="validationDefault03">City</label>
							<input
								type="text"
								className="form-control"
								id="validationDefault03"
								placeholder="City"
								required
							/>
						</div>
						<div className="col-md-3 mb-3">
							<label htmlFor="validationDefault04">State</label>
							<input
								type="text"
								className="form-control"
								id="validationDefault04"
								placeholder="State"
								required
							/>
						</div>
						<div className="col-md-3 mb-3">
							<label htmlFor="validationDefault05">Zip</label>
							<input
								type="text"
								className="form-control"
								id="validationDefault05"
								placeholder="Zip"
								required
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								value=""
								id="invalidCheck2"
								required
							/>
							<label
								className="form-check-label"
								htmlFor="invalidCheck2">
								Agree to terms and conditions
							</label>
						</div>
					</div>
					<button className="btn btn-primary" type="submit">
						Submit form
					</button>
				</form>
			</div>
		);
	}
}
