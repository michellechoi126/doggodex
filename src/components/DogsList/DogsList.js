import React from 'react';
import { DogContext } from '../../DogContext';
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

function DogsList(props) {
    const { name } = useParams();

    const { dogFacts, setDogFacts } = useContext(DogContext);

    return (
        <div>
            {dogFacts.map((element) => (
                <Link to={`/${name}`} key={element.id}>
                    <div>
                        <h3>{name}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default DogsList;