import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DogDetails(props) {
    const { name } = useParams();

    const [dogFacts, setDogFacts] = useState(null);
	
	function getDogData() {
		const url = `https://api.thedogapi.com/v1/breeds?q=${name}`;
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
            <h1>Breed: {name}</h1>
        </div>
    );
}

export default DogDetails;