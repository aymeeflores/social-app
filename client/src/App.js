import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Profileview from "./pages/Profileview/Profileview";
import Home from "./pages/Home/Home";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" exact component={Home} />
				<Route path="/profileview" component={Profileview} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
