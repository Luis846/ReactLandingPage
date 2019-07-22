import React from "react";
import { Nav } from "./Nav.js";
import { Jumbotron } from "./jumbotron.js";
import { Carddeck } from "./carddeck.js";
import { Form } from "./form.js";
import { Footer } from "./footer.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<Jumbotron />
				<Carddeck />
				<Form />
				<Footer />
			</div>
		);
	}
}
