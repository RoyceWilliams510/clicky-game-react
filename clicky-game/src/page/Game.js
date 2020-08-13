import React, { Component } from "react";
import Rows from "../components/Row";
import Nav from "../components/Nav";


class Game extends Component {
    state = {
        characters : [
            {name:"ross",imageUrl:"./images/ross.png"},
            {name:"monica",imageUrl:"./images/monica.jpg"},
            {name:"chandler",imageUrl:"./images/chandler.jpg"},
            {name:"gunther",imageUrl:"./images/Gunther.png"},
            {name:"jack",imageUrl:"./images/jack.jpg"},
            {name:"janice",imageUrl:"./images/janice.jpg"},
            {name:"jill",imageUrl:"./images/jill.png"},
            {name:"joey",imageUrl:"./images/joey.jpg"},
            {name:"paul",imageUrl:"./images/paul.png"},
            {name:"phoebe",imageUrl:"./images/phoebe.jpg"},
            {name:"rachel",imageUrl:"./images/rachel.jpeg"},
            {name:"richard",imageUrl:"./images/richard.jpg"}
        ],
        message: "",
        score: 0,
        guessed: [],
        highScore:0
      };
    handleBtnClick = event => {
        // Storing the value of the old state
        var newState = { ...this.state };
        // Retrieving the value of the clicked button
        const name = event.target.attributes.getNamedItem("data-value").value;
        // What happens when the correct button is clicked
        console.log(this.state.guessed);
        console.log(this.state.guessed.indexOf(name));
        if(this.state.guessed.indexOf(name)!==-1){
          newState.message = "Incorrect, game over!"
            if(newState.highScore<newState.score){
                newState.highScore = newState.score;
            }
          newState.guessed = [];
          newState.score = 0;
        }
        if(this.state.guessed.indexOf(name)===-1){
            newState.guessed.push(name);
            newState.score += 1;
            newState.message = "Correct!";
        }
        for(let i = newState.characters.length - 1; i > 0; i--){
          const j = Math.floor(Math.random() * i)
          const temp = newState.characters[i]
          newState.characters[i] = newState.characters[j]
          newState.characters[j] = temp
        }
        this.setState(newState);
    }

    render() {
      return (
        <div>
          <Nav
            score = {this.state.score}
            message = {this.state.message}
            highScore = {this.state.highScore}

          />
          <br></br>
          <br></br>
          <br></br>

          <Rows
          click = {this.handleBtnClick}
          characters = {this.state.characters}
          />
        </div>
      )
    }
}
export default Game;
