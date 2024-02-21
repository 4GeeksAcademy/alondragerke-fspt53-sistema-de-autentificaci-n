import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/" className="link-style">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">

				</div>
			</div>
		</nav>
	);
};
