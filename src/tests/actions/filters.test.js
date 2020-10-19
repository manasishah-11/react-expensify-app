import {setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from '../../actions/filters.js';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should setup set text filter action object with given value', () => {
   const action = setTextFilter('rent');
   expect(action).toEqual({
    type: 'SET_TEXT',
    text: 'rent'
   });
});

test('should setup set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
     type: 'SET_TEXT',
     text: ''
    });
 });

 test('should set up sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
    });
 });

 test('should set up sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
 });
