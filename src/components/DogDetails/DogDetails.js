import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DogImages from "../DogImages/DogImages";

function DogDetails(props) {
    const { name } = useParams();

    const [dogDetails, setDogDetails] = useState(null);
    const [moreDetails, setMoreDetails] = useState(false);
	
	function getDogData() {
		const url = `https://api.thedogapi.com/v1/breeds/search?q=${name}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setDogDetails(data);
			})
			.catch(console.error);
	}
		
	useEffect(() => {
		getDogData();
	}, []);

    function handleClick (event) {
        (moreDetails ? setMoreDetails(false) : setMoreDetails(true))
    };
    
    function toggle() {
        return(moreDetails ?
            <>
                <button onClick={handleClick}>More Details</button>
                <h3>Origin: {(dogDetails[0].origin) ? (dogDetails[0].origin) : "unknown"}</h3>
                <h3>Height: {(dogDetails[0].height.imperial) ? `${dogDetails[0].height.imperial} inches at the withers` : "unknown"}</h3>
                <h3>Bred for: {(dogDetails[0].bred_for) ? (dogDetails[0].bred_for) : "unknown"}</h3>
                <h3>Breed group: {(dogDetails[0].breed_group) ? (dogDetails[0].breed_group) : "unknown"}</h3>
            </>
        :
            <>
                <button onClick={handleClick}>More Details</button>
            </>
        )
    }

	if (dogDetails === null) {
		return <p>Loading Doggodex...</p>
	}

    return (
        <div>
            <DogImages id={dogDetails[0].id}/>
            
            <div className="main-details">
                <h1>{dogDetails[0].name}</h1>
                <h3>Temperament: {dogDetails[0].temperament}</h3>
                <h3>Weight: {dogDetails[0].weight.imperial} lbs</h3>
                <h3>Average life span: {dogDetails[0].life_span}</h3>
            </div>
            <hr />
            {toggle()}
        </div>
    );
}

export default DogDetails;