import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '', note = '', amount = 100, createdAt = 0}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//Expenses reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE': 
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    };
                }
                else{
                    return expense;
                }
            });
        default :
            return state;
    }
};

//Filter reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':{
            return{
                ...state,
                startDate: action.startDate
            };
        }
        case 'SET_END_DATE':{
            return{
                ...state,
                endDate: action.endDate
            };
        }
        default:
            return state;
    }
};


//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const TextMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && TextMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1: -1;
        }
    });
};

//CreateState 
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(VisibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 2000, createdAt: -2000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 5000, createdAt: 1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 75}));

//store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch((setStartDate(0)));
// store.dispatch((setEndDate(1250)));
// store.dispatch((setStartDate()));

const demoState = {
    expenses: [{
        id: 1011,
        description: 'January Rent',
        note: 'This was the final payment for that location',
        amout: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

