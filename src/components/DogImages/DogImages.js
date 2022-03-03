import React from 'react';
import { DogContext } from '../../DogContext';
import { useContext } from 'react';

function DogImages(props) {
    const { dogFacts, setDogFacts } = useContext(DogContext);

    https://api.thedogapi.com/v1/images/search?breed_id=2&limit=100&order=random&size=med

    return (
        <div>
            
        </div>
    );
}

export default DogImages;