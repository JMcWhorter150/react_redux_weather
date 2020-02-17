import React from 'react';

export default class WeatherInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        }
    }

    render() {
        return(
            <form onSubmit={this._handleSubmit}>
                <input onChange={this._handleInput} placeholder="Enter City" value={this.state.city}></input>
            </form>
        )
    }

    _handleInput = (event) => {
        this.setState({
            city: event.target.value
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props._handleSubmit(event.target.value);
    }
}