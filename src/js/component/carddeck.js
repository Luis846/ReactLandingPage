import React from "react";

const cardsDeck = [
	{
		image:
			"https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		title: "CardTitle",
		text: "This card has supporting text below as a natural"
	},
	{
		image:
			"https://images.unsplash.com/photo-1474710820418-dd5406ee35d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		title: "CardTitle",
		text: "This card has supporting text below as a natural"
	},
	{
		image:
			"https://images.unsplash.com/photo-1484968309888-8d6b403bc1ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
		title: "CardTitle",
		text: "This card has supporting text below as a natural"
	},
	{
		image:
			"https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		title: "CardTitle",
		text: "This card has supporting text below as a natural"
	}
];

let cardsF = cardsDeck.map((e, i) => {
	return (
		<div className="card" key={i}>
			<img className="card-img-top" src={e.image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{e.title}</h5>
				<p className="card-text">{e.text}</p>
				<p className="card-text">
					<small className="text-muted">
						Last updated 3 mins ago
					</small>
				</p>
			</div>
		</div>
	);
});
export class Carddeck extends React.Component {
	render() {
		return (
			<div className="card-deck mx-auto" style={{ width: "77%" }}>
				{cardsF}
			</div>
		);
	}
}