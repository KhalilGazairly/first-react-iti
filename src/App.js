import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import React from "react";
import Employee from "./Employee";

class App extends React.Component{
	render() {
		return 	<div>
				<Counter />
				<hr />
				<Employee />
			</div>;
		
	}
}

export default App;
