//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import "./App.css";
import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
	return (
		<>
			<Header />
			<div className="App">
				<nav>
					<Link to={"/"}>Home</Link> &nbsp;
					<Link to={"/about"}>About</Link> &nbsp;
					<Link to={"/contact"}>Contact</Link>
				</nav>
				<Outlet />
			</div>
		</>
	);
}

export default App;
