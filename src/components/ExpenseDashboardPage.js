import React from 'react';
import ExpenseList from './ExpenseList.js'
import ExpenseListFilters from './ExpenseListFilters.js';
import ExpenseSummary from './ExpenseSummary.js';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;