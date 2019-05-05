import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MainHeader from './components/MainHeader';
import Pokemon from './components/Pokemon';

const mockPokemon = {
  name: 'mockPokemonName',
  sprites: { front_default: 'https://example.com/mock/pokemon/image' },
};


describe('<App>', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  });


  test('renders', () => {
    expect(shallow(<App />).exists()).toEqual(true);
  });


  test('default state', () => {
    expect(shallow(<App />).state()).toEqual({ pokemon: null });
  });


  describe('search()', () => {
    let jsonSpy;

    beforeEach(() => {
      jsonSpy = jest.fn().mockImplementation(async () => mockPokemon);
      jest.spyOn(global, 'fetch').mockImplementation(async () => ({ json: jsonSpy }));
    });


    test('calls `fetch`', () => {
      jest.spyOn(App.prototype, 'setState').mockImplementation(() => {});
      expect(global.fetch).not.toHaveBeenCalled();
      shallow(<App />).instance().search(mockPokemon.name);
      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalled();
    });


    test('fetch URL is correct', () => {
      jest.spyOn(App.prototype, 'setState').mockImplementation(() => {});
      shallow(<App />).instance().search(mockPokemon.name);
      expect(global.fetch)
        .toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/mockPokemonName/');
    });


    test('parses JSON', async () => {
      jest.spyOn(App.prototype, 'setState').mockImplementation(() => {});
      return shallow(<App />)
        .instance()
        .search(mockPokemon.name)
        .then(() => {
          expect(jsonSpy).toHaveBeenCalledTimes(1);
          expect(jsonSpy).toHaveBeenCalledWith();
        });
    });


    test('changes `this.state.pokemon` to parsed JSON if a pokemon is returned', async () => {
      const wrapper = shallow(<App />);
      return wrapper
        .instance()
        .search(mockPokemon.name)
        .then(() => {
          expect(wrapper.state('pokemon')).toEqual(mockPokemon);
        });
    });
  });


  describe('render()', () => {
    describe('<MainHeader>', () => {
      test('renders', () => {
        expect(shallow(<App />).find(MainHeader)).toHaveLength(1);
      });


      test('correct value is passed for the `heading` prop', () => {
        expect(shallow(<App />).find(MainHeader).prop('heading')).toEqual('Pokédex');
      });


      test('function is passed into `onSubmit` prop', () => {
        expect(shallow(<App />).find(MainHeader).prop('onSubmit')).toBeInstanceOf(Function);
      });


      test('`this.search` is passed into `onSubmit` prop', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(MainHeader).prop('onSubmit')).toEqual(wrapper.instance().search);
      });
    });


    describe('<Pokemon>', () => {
      test('displays placeholder pokemon while `this.state.pokemon` is `null`', () => {
        const pokemon = shallow(<App />).find(Pokemon);
        expect(pokemon).toHaveLength(1);
        expect(pokemon.prop('name')).toEqual('No Results');
        expect(pokemon.prop('imgSrc')).toEqual('/placeholder.png');
      });


      describe('when `this.state.pokemon` is not `null`', () => {
        test('renders a <Pokemon /> component', () => {
          const wrapper = shallow(<App />);
          wrapper.setState({ pokemon: mockPokemon });
          expect(wrapper.find(Pokemon)).toHaveLength(1);
        });


        test('`name` prop of <Pokemon />', () => {
          const wrapper = shallow(<App />);
          wrapper.setState({ pokemon: mockPokemon });
          expect(wrapper.find(Pokemon).prop('name')).toEqual(mockPokemon.name);
        });


        test('`imgSrc` prop of <Pokemon />', () => {
          const wrapper = shallow(<App />);
          wrapper.setState({ pokemon: mockPokemon });
          expect(wrapper.find(Pokemon).prop('imgSrc')).toEqual(mockPokemon.sprites.front_default);
        });
      });
    });
  });
});
