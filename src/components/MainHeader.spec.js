import React from 'react';
import { shallow } from 'enzyme';
import { Navbar, Form, Input } from 'reactstrap';
import MainHeader from './MainHeader';


describe('<MainHeader>', () => {
  let defaultProps;

  beforeEach(() => {
    jest.restoreAllMocks();
    defaultProps = { heading: 'mockHeading', onSubmit: jest.fn() };
  });


  test('renders', () => {
    expect(shallow(<MainHeader {...defaultProps} />).exists()).toEqual(true);
  });


  describe('constructor()', () => {
    test('default state', () => {
      expect(shallow(<MainHeader {...defaultProps} />).state()).toEqual({ pokemonName: '' });
    });
  });


  describe('handleSubmit(event)', () => {
    let mockEvent;

    beforeEach(() => {
      mockEvent = { preventDefault: jest.fn() };
    });


    test('calls `event.preventDefault`', () => {
      shallow(<MainHeader {...defaultProps} onSubmit={() => {}} />)
        .instance().handleSubmit(mockEvent);
      expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
      expect(mockEvent.preventDefault).toHaveBeenCalledWith();
    });


    test('calls `props.onSubmit` with `this.state.pokemonName`', () => {
      const mockOnSubmit = jest.fn();
      const wrapper = shallow(<MainHeader {...defaultProps} onSubmit={mockOnSubmit} />);
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith('');

      jest.resetAllMocks();
      wrapper.setState({ pokemonName: 'mockPokemonName' });
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockOnSubmit).toHaveBeenCalledTimes(1);
      expect(mockOnSubmit).toHaveBeenCalledWith('mockPokemonName');
    });
  });


  describe('handlePokemonNameChange()', () => {
    test('sets `this.state.pokemonName` to `event.target.value`', () => {
      const wrapper = shallow(<MainHeader {...defaultProps} />);
      expect(wrapper.state('pokemonName')).toEqual('');
      wrapper.instance().handlePokemonNameChange({
        target: { value: 'mockValue' },
      });
      expect(wrapper.state('pokemonName')).toEqual('mockValue');
    });
  });


  describe('render()', () => {
    beforeEach(() => {
      jest.spyOn(MainHeader.prototype, 'handleSubmit').mockImplementation(() => {});
      jest.spyOn(MainHeader.prototype, 'handlePokemonNameChange').mockImplementation(() => {});
    });


    test('<Navbar> renders', () => {
      expect(shallow(<MainHeader {...defaultProps} />).find(Navbar)).toHaveLength(1);
    });


    test('<h1> contains `this.props.heading`', () => {
      const h1Wrapper = shallow(<MainHeader {...defaultProps} />).find('h1');
      expect(h1Wrapper).toHaveLength(1);
      expect(h1Wrapper.text()).toEqual('mockHeading');
    });


    test('<Form> has `this.handleSubmit` as its `onSubmit` prop', () => {
      const wrapper = shallow(<MainHeader {...defaultProps} />);
      const formWrapper = wrapper.find(Form);
      expect(formWrapper).toHaveLength(1);
      expect(formWrapper.prop('onSubmit')).toEqual(wrapper.instance().handleSubmit);
    });


    describe('<Input>', () => {
      test('renders', () => {
        expect(shallow(<MainHeader {...defaultProps} />).find(Input)).toHaveLength(1);
      });


      test('assigns "Search by name..." as its `placeholder` prop', () => {
        expect(shallow(<MainHeader {...defaultProps} />).find(Input).prop('placeholder'))
          .toEqual('Search by name...');
      });


      test('assigns `this.state.pokemonName` to `value` prop', () => {
        const wrapper = shallow(<MainHeader {...defaultProps} />);
        expect(wrapper.find(Input).prop('value')).toEqual('');
        wrapper.setState({ pokemonName: 'mockPokemonName' });
        expect(wrapper.find(Input).prop('value')).toEqual('mockPokemonName');
      });


      test('assigns `this.handlePokemonNameChange` to `onChange` prop', () => {
        const wrapper = shallow(<MainHeader {...defaultProps} />);
        expect(wrapper.find(Input).prop('onChange'))
          .toEqual(wrapper.instance().handlePokemonNameChange);
      });
    });
  });
});
