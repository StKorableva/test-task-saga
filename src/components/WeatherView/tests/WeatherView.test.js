import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import WeatherView from '../WeatherView';

const props = {
    getWeather: jest.fn(),
    weather: {
        temp: 280.5
    },
    isFetching: false,
    city: 'saint petersburg'
}

const weatherview = shallow(<WeatherView {...props} />);


describe('<WeatherView />', () => {
	it('should match snapshot', () => {
		expect(toJson(weatherview)).toMatchSnapshot();
    });
    
    it('should render Spinner when data is fetching', () => {
        weatherview.setProps({isFetching: true});
        expect(toJson(weatherview)).toMatchSnapshot();
    })

    it('update data when change city', () => {
        weatherview.setProps({city: 'moscow'});
        expect(weatherview.instance().props.getWeather).toHaveBeenCalledTimes(2);
    })
});
