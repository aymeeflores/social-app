import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profileview from "./pages/Profileview/Profileview";
function App() {
	return (
		<div>
			<Navbar />
			<Profileview />
		</div>
	);
}

export default App;
