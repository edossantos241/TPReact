import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  constructor(props){
    super(props)
    this.state= {
      name :  String,
      src : String,
      flipped: Boolean
      
    }
  }

  render() {
    return (
    
        <div className="card bg-dark text-white">
            <img className="card-img-top" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.src} />
            <p className="card-text">{this.props.name}</p>
      </div>
      
      
    );
  }
}

export default Card;