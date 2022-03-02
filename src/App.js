import { useState, useEffect } from 'react';
import './App.css';

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
        Hello! This is the App Component.
			</header>
		</div>
	);
}

export default App;
