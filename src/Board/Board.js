import React, { Component } from 'react';
import './Board.css';
import Card from '../Card/Card';


class Board extends Component {
  constructor(props){
    super(props);
    this.state={
      champions:Array
    }
  }
  componentDidMount(){
    this.getcham();
  }
  getcham = () => {
    let champ = []
    
    fetch("champions.json")
        .then(response => response.json())
        .then(response => {
          for(let i = 0; i<3; i++){
            let taille = Object.keys(response.data).length;
            let indice = Math.floor(Math.random() * Math.floor(taille));
            let alias = Object.keys(response.data)[indice];
            console.log(champ)
            champ.push({name: alias,  src: alias+"_0.jpg"});
            champ.push({name : alias , src: alias+"_1.jpg"});
          }
          
          this.setState({champions:champ})  
          })
  }
  
  render() {
    if(this.state.champions.length>0){
      let champ =this.state.champions;
      let champ1 = []
      for(let i in champ){
        let parcName = champ[i].name;
        let parcSrc = champ[i].src;
        champ1.push(<Card name={parcName} key={parcName+i} src={parcSrc}/>)
        }
      return (
        <section className="card-columns ">
          {champ1}
        </section>
      );
    }else{
      return (
        <section className="card-columns ">
         rien
        </section>
      );
    }
      
  }

  
  
}


export default Board;