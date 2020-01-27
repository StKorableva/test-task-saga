import { weatherReducer } from '../weatherReducer';

describe('weather reducer', () => {

    it('should return the initial state', () => {
        expect(weatherReducer(undefined, {})).toEqual({});
    });

    it('reducer should get data and put it in store', ()=> {
        const newState = { weather: {temp: 280.5}, error: '' }
        expect(weatherReducer({}, { type: 'WEATHER_FETCH_SUCCESS', weather: {temp: 280.5}, error: ''})).toEqual(newState);
    });

    it('reducer should start fetching', () => {
        const newState = { isFetching: true };
		expect(weatherReducer({}, { type: 'WEATHER_FETCH_START', isFetching: true })).toEqual(newState);
    });
    it('reducer should set error', () => {
        const newState = { error: 'error message' };
		expect(weatherReducer({}, { type: 'WEATHER_FETCH_ERROR', error: 'error message' })).toEqual(newState);
    });

})