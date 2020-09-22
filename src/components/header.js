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
					<input type="text" placeholder="Search ..." />
				</div>
				<div className="right">
					<button className="getStrarted">Register</button>
				</div>
			</div>
		</div>
	);
}

export default Header;
