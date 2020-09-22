import React, { useState } from "react";
import "./App.scss";
import "./styles/style.scss";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./pages";
function App() {
	var [helps, setHelp] = useState([
		{
			title: "What is the use of useEffect in app.js?",
			by: "Sampath Bandla",
			time: "12-07-2020 01:32PM",
			userIcon:
				"https://secure.gravatar.com/avatar/a32d5e3c2f125c7dfc92467707d73f3c?s=500&d=retro",
			githubUrl: "#",
			type: "question",
			solved: false
		},
		{
			title: "Their is a bug in index page",
			by: "Sampath Bandla",
			time: "12-07-2020 01:32PM",
			userIcon:
				"https://secure.gravatar.com/avatar/a32d5e3c2f125c7dfc92467707d73f3c?s=500&d=retro",
			githubUrl: "#",
			type: "bug",
			solved: true
		},
		{
			title: "Add Profile Pic",
			by: "Sampath Bandla",
			time: "12-07-2020 01:32PM",
			userIcon:
				"https://secure.gravatar.com/avatar/a32d5e3c2f125c7dfc92467707d73f3c?s=500&d=retro",
			githubUrl: "#",
			type: "feature",
			solved: false
		}
	]);
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact>
						<Index helps={helps} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
