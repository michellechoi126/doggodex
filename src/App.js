import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import DogDetails from './components/DogDetails/DogDetails';
import DogsList from './components/DogsList/DogsList';


function App() {
	const [dogFacts, setDogFacts] = useState([]);
	
	function getDogData() {
		const url = `https://api.thedogapi.com/v1/breeds?api_key=${process.env.REACT_APP_API_KEY}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				console.log('We have data!', data);
				setDogFacts(data);
			})
			.catch(console.error);
	}
		
	useEffect(() => {
		getDogData();
	}, []);

	return (
		<div className='App'>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<DogsList />} />
					<Route path='' element={<DogDetails />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
