import React from 'react';
import MainHeader from './components/MainHeader';
import Pokemon from './components/Pokemon';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: null };
    this.search = this.search.bind(this);
  }

  search(pokemonName) {
    // TODO: Get pokemon searched for and set it as the state of `pokemon`
    // Feel free to refer to your pokédex assignment
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    return ;
  }

  render() {
    return (
      <div>
        <MainHeader heading="Pokédex" onSubmit={this.search} />

        {this.state.pokemon === null ? (
          <Pokemon name="No Results" imgSrc="/placeholder.png" />
        ) : (
          // TODO: Add other <Pokemon> with appropriate props passed
        )}
      </div>
    );
  }
}

export default App;
