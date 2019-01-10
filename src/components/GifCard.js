import React from 'react';
import './GifCard.css'


//Display for gifs, functional component 
const GifCard = (props) => {
    var gifs = props.gifs.map((element, index) => (<img className="gifCard" key={index} alt="" src={element.url} height={element.height} width={element.width} />));
    return(
        <div className="gifCard-container">
            {gifs}
        </div>
    );
}

export default GifCard;
