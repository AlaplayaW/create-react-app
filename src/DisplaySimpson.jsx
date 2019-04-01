import React from "react";

const DisplaySimpson = ({ simpson }) => {
	return (
		<div className="DisplaySimpson">
			<p>{simpson.quote}</p>
			<img src={simpson.image} alt="picture of simpson" />
			<p>{simpson.character}</p>
		</div>
	);
};

export default DisplaySimpson;
