import React from 'react'

export default class GifSearch extends React.Component {

    //set initial state of query to empty string
    state= {
        query: ""
    }

    // handle submit of gif search
    handleSubmit = event => {
        // ANY SUBMIT NEEDS PREVENT DEFAULT
        event.preventDefault()
        // fetch the gifs with an arg of the query user enters
        this.props.fetchGifs(this.state.query)
    }

    // render search form
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={event => this.setState({query: event.target.value})} />
                </form>
            </div>
        )
    }
}