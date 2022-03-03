import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DogDetails(props) {
    const { name } = useParams();

    const [dogFacts, setDogFacts] = useState(null);
	
	function getDogData() {
		const url = `https://api.thedogapi.com/v1/breeds/search?q=${name}`;
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
        <div>
            <h1>Breed: {dogFacts[0].name}</h1>
            <h3>Temperament: {dogFacts[0].temperament}</h3>
        </div>
    );
}

export default DogDetails;