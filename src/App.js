import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DogContext } from './DogContext';
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
				setDogFacts(data);
			})
			.catch(console.error);
	}
		
	useEffect(() => {
		getDogData();
	}, []);

	if (!dogFacts) {
		return <p>Loading Doggodex...</p>
	}

	return (
		<DogContext.Provider value={{ dogFacts, setDogFacts }}>
			<div className="App-container">
				<header className="App-header">
					<Header />
				</header>
				<main className="App-main">
					<Routes>
						<Route path='/' element={<DogsList />} />
						<Route path='/:name' element={<DogDetails />} />
					</Routes>
				</main>
			</div>
		</DogContext.Provider>
	);
}

export default App;
