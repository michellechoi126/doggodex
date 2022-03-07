import React from 'react';
import { useState, useEffect, useReducer} from 'react';
import { useParams } from 'react-router-dom';
import DogImages from "../DogImages/DogImages";
import "./DogDetails.css";


function DogDetails(props) {
    const { name } = useParams();

    const [dogDetails, setDogDetails] = useState(null);
	
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

    const [faveHeart, setFaveHeart] = useState(<span role="img" aria-label="heart" >♡</span>)
    function favorite(event) {
        return (
            setFaveHeart(<span role="img" aria-label="heart" >♥︎</span>)
        )
    }

    const [display, dispatch] = useReducer(detailButtons, "please click on the detail button below, you would to know more about.");

    function detailButtons(state, detail) {
        switch(detail.type) {
            case "TEMPERAMENT":
                return <h3>Temperament: {dogDetails[0].temperament}</h3>;
            case "ORIGIN":
                return <h3>Origin: {(dogDetails[0].origin) ? (dogDetails[0].origin) : "unknown"}</h3>;
            case "BREDFOR":
                return <h3>Bred for: {(dogDetails[0].bred_for) ? (dogDetails[0].bred_for) : "unknown"}</h3>;
            case "BREEDGROUP":
                return <h3>Breed group: {(dogDetails[0].breed_group) ? (dogDetails[0].breed_group) : "unknown"}</h3>;
            case "LIFESPAN":
                return <h3>Average life span: {dogDetails[0].life_span}</h3>;
            default:
                return state;
        }
    }

	if (dogDetails === null) {
		return <p>Loading Doggodex...</p>
	}

    return (
        <div className="dogDetails-container">
            <div className="img-name">
                <div className="knobs">
                    <div role="img" aria-label="decorative knobs">🔘</div>
                    <div role="img" aria-label="decorative knobs">🔘</div>
                </div>
                <div className="dogDetails-img">
                    <DogImages id={dogDetails[0].id}/>
                </div>
                <div className="knobs-container">
                    <div className="redlight">
                        <div role="img" aria-label="redlight decor">🔴</div>
                    </div>
                    <div className="longKnobs">
                        <div className="longKnob1" role="img" aria-label="decorative knobs">🔘</div>
                        <div className="longKnob2" role="img" aria-label="decorative knobs">🔘</div>
                    </div>
                </div>
                <div className="bottom-imgName">
                    <div className="dogDetails-name">
                        <h1>{dogDetails[0].name}</h1>
                    </div>
                    <button className="heart" onClick={favorite}>{faveHeart}</button>
                </div>
            </div>
            <hr />
            <div className="details-container">
                <div className="more-details">
                    <div className="main-details">
                        {display}
                    </div >
                    <div className="buttons-container">
                        <button className="details-buttons" onClick={() => dispatch({ type: "TEMPERAMENT"})}>
                            temperament</button>
                        <button className="details-buttons" onClick={() => dispatch({ type: "LIFESPAN"})}>
                            life span</button>
                        <button className="details-buttons" onClick={() => dispatch({ type: "ORIGIN"})}>
                            origin</button>
                        <button className="details-buttons" onClick={() => dispatch({ type: "BREEDGROUP"})}>
                            breed group</button>
                        <button className="details-buttons" onClick={() => dispatch({ type: "BREDFOR"})}>
                            bred for</button>
                    </div>
                </div>
                <div className="midSection-decor">
                    <div className="leftSide">
                        <button className="back" role="img" aria-label="back button">◀︎</button>
                        <button className="next" role="img" aria-label="next button">▶︎</button>
                    </div>
                    <div className="rightSide-decor">
                        <div className="details-decor">
                                <div role="img" aria-label="decorative knobs"> . </div>
                                <div role="img" aria-label="decorative knobs"> . </div>
                        </div>
                        <div className="yellowLight" role="img" aria-label="decorative yellow light">🟡</div>
                    </div>
                </div>
                <div className="weight-height">
                    <div className="weight">
                        <h3>Weight: {dogDetails[0].weight.imperial} lbs</h3>
                    </div>
                    <div className="height">
                        <h3>Height: {(dogDetails[0].height.imperial) ? `${dogDetails[0].height.imperial} inches at the withers` : "unknown"}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DogDetails;