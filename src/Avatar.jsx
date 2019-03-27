import React, { Component } from "react";

const Avatar = ({
	image = "https://www.drupal.org/files/issues/default-avatar.png",
	firstName,
	lastName,
	star
}) => (
	<div style={{ backgroundColor: star ? "#000" : "#666", width: "60vw" }}>
		<h1>
			{firstName} {lastName.toUpperCase()}
		</h1>
		<img src={image} alt="" />
	</div>
);

export default Avatar;
