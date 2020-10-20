import selectTotalExpense from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses.js';

test('should retrun 0 if no expenses', () => {  
    const res = selectTotalExpense([]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectTotalExpense([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add up multiple expenses', () => {
    const res = selectTotalExpense(expenses);
    expect(res).toBe(114195);
});