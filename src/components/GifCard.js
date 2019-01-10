import React, { Component } from 'react';

var APIKey = 'ilp9bNjZCdFKtrxG2ctF9PUilDGuggtp';

//Display for gifs, functional component 
const GifCard = (props) => {
    var gifs = props.gifs.map((element) => (<img src={element.url} height={element.height} width={element.width} />));
    return(
        <div>
            {gifs}
        </div>
    );
}

export default GifCard;
