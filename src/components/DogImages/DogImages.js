import React from 'react';
import { useState, useEffect } from 'react';
import "./DogImages.css";

function DogImages(props) {
    const id = props.id

    const [dogImages, setDogImages] = useState(null);

    function getDogImages() {
		const url = `https://api.thedogapi.com/v1/images/search?breed_id=${id}&limit=100&order=random&size=small`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setDogImages(data);
			})
			.catch(console.error);
	}
		
	useEffect(() => {
		getDogImages();
	}, []);

    if (dogImages === null) {
		return <p>Loading Images...</p>
	}

    return (
        <div>
            <img src={dogImages[0].url} alt={dogImages[0].breeds[0].name} className="dogDetail-img"/>
        </div>
    );
}

export default DogImages;