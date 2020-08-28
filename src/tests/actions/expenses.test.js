import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: 'abc123'});
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : 'abc123'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('abc123', {name: 'raj'});
    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id : 'abc123',
        updates : {name: 'raj'}
    })
})