import React from 'react'

// just for displaying so it can be a functional comp.

const GifList = props => {
    // pass down gifs as props to render them in our GifList
    console.log(props);

    // map over the gifs array
    // for every gif create w/in image tag 
    return(
        <div>
            {props.gifs.map(gif => <img key={gif.url} src={gif.url} alt="gif"/>)}
        </div>
    )
}

// don't forget to export
export default GifList