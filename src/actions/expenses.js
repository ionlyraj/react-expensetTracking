import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => {
    return {
        type: 'ADD_EXPENSE',
        expense
    }
};

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        })
    }
};

export const removeExpense = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id
    }
};

export const startRemoveExpense = (expense) => {
    return (dispath) => {
        const { id } = expense;
        return database.ref(`expenses/${id}`).remove().then(() => {
            dispath(removeExpense({id}))
        })
    }
};

export const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
};

//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value')
            .then( (snapshot) => {
                const expenses = [];
                snapshot.forEach(element => {
                    expenses.push({
                        id: element.key,
                        ...element.val()
                    })
                });
                dispatch(setExpenses(expenses));
            });
    }
}