import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from '../selectors/expenses.js';
import selectTotalExpense from '../selectors/expenses-total.js';


export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpenseTotal = numeral(expenseTotal/100).format('$0,0.00');
    return(
        <div>
            <h1>Viewing {expenseCount} {expenseWord} totalling to {formattedExpenseTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectTotalExpense(visibleExpenses)
    }
};
  
export default connect(mapStateToProps)(ExpenseSummary);


