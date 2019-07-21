import React from "react";

const cardsDeck = [
	{
		image:
			"https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		title: "Discover the Wonders",
		text: "Ennui subway tile mumblecore, o-table poutine twee four loko. "
	},
	{
		image:
			"https://images.unsplash.com/photo-1474710820418-dd5406ee35d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		title: "Make memories",
		text:
			"Lorem ipsum dolor amet chillwave kale chips cho park swag, XOXO copper"
	},
	{
		image:
			"https://images.unsplash.com/photo-1484968309888-8d6b403bc1ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
		title: "Viking History",
		text: "Lorem ipsum dolor amet tilde humble Snackwave you probably "
	},
	{
		image:
			"https://images.unsplash.com/photo-1529963183134-61a90db47eaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
		title: "Land of the Nords",
		text: "Lorem ipsum dolor amet tilde humblebrag neutra polaroid"
	}
];

let cardsF = cardsDeck.map((e, i) => {
	return (
		<div className="card cardsRow shadow-lg border-0 rounded" key={i}>
			<img className="card-img-top" src={e.image} alt="Card image cap" />
			<div className="card-body text-center">
				<h5 className="card-title">{e.title}</h5>
				<p className="card-text">{e.text}</p>
				<div className="dropdown-divider mb-3" />
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
				<p className="card-text bg-light">
					<small className="text-muted" />
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
