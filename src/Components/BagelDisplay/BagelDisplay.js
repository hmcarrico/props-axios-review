import React, { Component } from 'react'

class BagelDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            rating: 5 
        }
    }

    updateRating(e) {
        this.setState({
            rating: e.target.value
        })
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.scale}</p>
                <input type='number' 
                    value={this.state.rating} 
                    onChange={e=> this.updateRating(e)}
                />
                <button onClick={() => this.props.updateScale(this.state.rating, this.props.index)}>Update Rating</button>
                <img src={this.props.imageUrl}/>
            </div>
        )
    }
}

export default BagelDisplay;
