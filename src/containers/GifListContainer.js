// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
// https://api.giphy.com/v1/gifs/search?q=0dGqqjRfXV9m7zb58Mm1BaDAycJrHe5Y&api_key=dc6zaTOxFJmzC&rating=g

// does data fetching
// renders it's corresponding subcomp.
import React from 'react'
// since this container is the parent import the child comp.
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component {
    //set initial state of query to empty string
    state = {
        gifs: []
    }
      
    // fetch gifs from our API
    fetchGIFs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
        .then(res => res.json())
        .then(({data}) => {
            // with data received update state w/ our gifs
            // since it's an array, iterate w/ map and get each gifs url
            this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
        })
    }
      
    componentDidMount() {
        // once comp is mounted call to our fetch method
        this.fetchGIFs()
    }

    render() {
        // render our child comp.
        return(
        <div>
            <GifSearch fetchGIFs={this.fetchGIFs} />
            <GifList gifs={this.state.gifs} />
        </div>
        )
    }
}