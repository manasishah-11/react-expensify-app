const selectTotalExpense = (expenses) => {
    return expenses.reduce((total, expense) => {
        return total + expense.amount;
    }, 0);
};

export default selectTotalExpense;