import React, { Component } from 'react';

<<<<<<< HEAD
//Display for gifs, functional component 
=======
var APIKey = 'ilp9bNjZCdFKtrxG2ctF9PUilDGuggtp';

//Display for gifs, functional component 
const GifCard = (props) => {
    var gifs = props.gifs.map((element) => (<img src={element.original.url} height={element.original.height} width={element.original.width} />));
    return(
        <div>
            {gifs}
        </div>
    );
}

export default GifCard;
>>>>>>> a9cec72e8caee0f5c48e9ba7a37e239141162999
