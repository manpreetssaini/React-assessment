import React from 'react';
import MainHeader from './components/MainHeader';
import Pokemon from './components/Pokemon';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      url: null,
    };
    this.search = this.search.bind(this);
  }

  search(pokemonName) {
    fetch(url)
      .then(response => response.json())
      .catch((err) => {console.log(err)})
      .then(pokemoneResult) => {
        const url = pokemonResult.sprites.front_default;
        this.setState({
          PokemonImgSrc: resultUrl,
          url:url,
        })
      }
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
          <pokemon name={this.state.pokemon} imgSrc={this.state.pokemonImgSrc}/>
        )}
      </div>
    );
  }
}

export default App;
