import expenseReducer from '../../reducers/expenses.js';
import expenses from '../fixtures/expenses.js';
import uuid from 'uuid';
import moment from 'moment';

test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ expenses[0] , expenses[2] ]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 109,
        description: 'Laptop',
        note: '',
        createdAt: 20000,
        amount: 29500
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([ ...expenses, expense ])
});

test('should edit expense by id', () => {
    const description = 'HouseRent';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[1].description).toEqual('HouseRent');
});

test('should not edit expense if id not found', () => {
    const description = 'HouseRent';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        }
    };
    const state = expenseReducer(expenses, action);
    expect(state[1].description).toEqual('Rent');
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});