import filterReducer from '../../reducers/filters.js';
import moment from 'moment';

test('should setup default values', () => {
    const state = filterReducer(undefined, {type: '@INIT'});
    expect(state).toEqual({ 
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filterReducer(currentState, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const text = 'This is my filter';
    const state = filterReducer(undefined, { type: 'SET_TEXT', text});
    expect(state.text).toBe(text);
});

test('should set start date filter', () => {
    const startDate = moment();
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate});
    expect(state.startDate).toBe(startDate);
});

test('should set end date filter', () => {
    const endDate = moment();
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate});
    expect(state.endDate).toBe(endDate);
}); 