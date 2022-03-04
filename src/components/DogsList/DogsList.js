import React from 'react';
import "./DogsList.css";
import { DogContext } from '../../DogContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function DogsList(props) {

    const { dogFacts, setDogFacts } = useContext(DogContext);

    return (
        <div>
            {dogFacts.map((element) => (
                <Link to={`/${element.name}`} key={element.id}>
                    <div className="container">
                        <img src={element.image.url} alt={element.name} className="dogImage"/>
                        <h3>{element.name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default DogsList;