import React from 'react';
import "./DogsList.css";
import { DogContext } from '../../DogContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function DogsList(props) {

    const { dogFacts, setDogFacts } = useContext(DogContext);

    return (
        <div className="dogList-container">
            {dogFacts.map((element) => (
                <Link to={`/${element.name}`} key={element.id}>
                    <div className="dogList-card">
                        <img src={element.image.url} alt={element.name} className="dogImage"/>
                        <div className="dogListName-container">
                            <h3 className="dogList-name">{element.name}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default DogsList;