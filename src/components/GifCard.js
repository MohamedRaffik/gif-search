import React from 'react';

//Display for gifs, functional component 
const GifCard = (props) => {
    var gifs = props.gifs.map((element, index) => (<img key={index} alt="" src={element.url} height={element.height} width={element.width} />));
    return(
        <div>
            {gifs}
        </div>
    );
}

export default GifCard;
