import React, { Component } from 'react';
import Status from './components/status/status'
import Fighter from './components/fighters/fighter'
import './App.css'
class App extends Component {

  state =  {
    player : [
       {
        "id" : 0,
        'name': 'Dog',
        'score' : 100,
        'image': 'https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-superJumbo.jpg'
      },
      {'id' : 1,
        'name': 'Cat',
        'score' : 100,
        'image': 'https://i.natgeofe.com/n/9135ca87-0115-4a22-8caf-d1bdef97a814/75552.jpg?w=636&h=424'

      }
    ],
    status: 'Cuties are set...'
    
  }
attack = (id)=> {
  // console.log(id)
  const player = [...this.state.player]
  let status = [...this.state.status]
  const attacker = player.find((el) => el.id === id)
  const attacked = player.find((el) => el.id !== id)
  attacked.score -= 5
  status = `${attacker.name} is attacking ${attacked.name}`

  this.setState({
    player: player,
    status: status
  })

}


  render() {
    return (
      <div className="App">
        <div className="">
         
          <Fighter fighters={this.state.player} attack={this.attack} />
      
         
          
        </div>
        
        <Status status={this.state.status} />
      </div>
    );
  }
}

export default App;

