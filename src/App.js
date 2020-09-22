import React from "react";
import "./App.scss";
import "./styles/style.scss";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Index from "./pages";
function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact>
						{Index}
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
