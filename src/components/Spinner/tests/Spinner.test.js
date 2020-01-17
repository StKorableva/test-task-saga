import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Spinner from '../Spinner';


const spinner = shallow(<Spinner />);

describe('<Spinner />', () => {
	it('should match snapshot', () => {
		expect(toJson(spinner)).toMatchSnapshot();
	});
});
