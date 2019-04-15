import "./App.css";
import React, { Component } from "react";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";
import Home from "./Home";
import History from "./History";


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<div>
						<ul>
							<li>
								<Link
									exact
									to="/"
									className="tags"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									to="/notre-histoire"
									className="tags"
								>
									History
								</Link>
							</li>
						</ul>

						<hr />

						<Route exact path="/" component={Home}  />
						<Route path="/notre-histoire" component={History} />
					</div>
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
