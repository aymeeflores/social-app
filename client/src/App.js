import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import Feed from "./components/Feed/Feed";
import Profilecard from "./components/Profilecard/Profilecard";

function App() {
	return (
		<div>
			<Profilecard />
		</div>
	);
}

export default App;
