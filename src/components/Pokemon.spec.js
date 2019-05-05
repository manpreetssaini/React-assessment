import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from './Pokemon';

const defaultProps = { name: 'mockName', imgSrc: 'mockImgSrc' };


describe('<Pokemon>', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });


  test('renders', () => {
    expect(shallow(<Pokemon {...defaultProps} />).exists()).toEqual(true);
  });


  describe('<img>', () => {
    test('exists', () => {
      expect(shallow(<Pokemon {...defaultProps} />).find('img')).toHaveLength(1);
    });


    test('`src` prop is set to `props.imgSrc`', () => {
      expect(shallow(<Pokemon {...defaultProps} />).find('img').prop('src'))
        .toEqual(defaultProps.imgSrc);
    });


    test('`alt` prop is set to `props.name`', () => {
      expect(shallow(<Pokemon {...defaultProps} />).find('img').prop('alt'))
        .toEqual(defaultProps.name);
    });
  });


  describe('<h1>', () => {
    test('exists', () => {
      expect(shallow(<Pokemon {...defaultProps} />).find('h1').exists()).toEqual(true);
    });


    test('<h1> component contains `props.name` as its `children`', () => {
      expect(shallow(<Pokemon {...defaultProps} />).find('h1').text()).toEqual(defaultProps.name);
    });
  });
});
