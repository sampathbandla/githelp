import React from "react";
function Header() {
	return (
		<div className="header">
			<div className="content">
				<div className="left">
					<div className="brand">
						<h1>
							GitHe<span>!</span>p
						</h1>
					</div>
					<input
						type="text"
						placeholder="Search for project in Github or Paste URL..."
					/>
				</div>
				<div className="right">
					<button className="getStrarted">Get Started!</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
