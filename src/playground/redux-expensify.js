import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '',note = '',amount = 0,createdAt = 0} = {}) => {
    return {
        type : 'ADD_EXPENSE',
        expense :{
            id : uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
};

const removeExpense = ({id} = {}) => {
    return {
        type : 'REMOVE_EXPENSE',
        id
    }
};

const editExpense = (id, updates) => { 
    return {
        type : 'EDIT_EXPENSE',
        id,
        updates
    }
 };

 const setTextFilter = (filter='') => {
     return {
         type : 'SET_TEXT_FILTER',
         filter
     }
 };

 const sortByDate = () => {
     return {
         type : 'SORT_BY_DATE'
     }
 };

 const sortByAmount = () => {
    return {
        type : 'SORT_BY_AMOUNT'
    }
};

const setStartDate = (startDate) => {
    return { 
        type : 'SET_START_DATE',
        startDate
     }
};

const setEndDate = (endDate) => {
    return { 
        type : 'SET_END_DATE',
        endDate
     }
};

const expensesReducerDefaultState = [];

const filtersReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}

const expensesReducer = (state = expensesReducerDefaultState , action) => {
    switch(action.type) {
        case 'ADD_EXPENSE' :
            return [...state, action.expense];
        case 'REMOVE_EXPENSE' :
            return state.filter(({id}) => id != action.id );
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return { ...expense, ...action.updates };
                } else {
                    return expense;
                }
            })
        default : 
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState , action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER' :
            return { ...state , text: action.filter };
        case 'SORT_BY_AMOUNT' :
            return { ...state, sortBy : 'amount' };
        case 'SORT_BY_DATE' :
            return { ...state, sortBy : 'date' };
        case 'SET_START_DATE' :
            return { ...state, startDate : action.startDate };
        case 'SET_END_DATE' :
            return { ...state, endDate : action.endDate };
        default :
            return state;
    }
};

// Get visible expenses

const getVisibleExpenses = ( expenses, {text, sortBy, startDate, endDate } ) => {
return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch =typeof endtDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
}).sort((a, b) => {
    if(sortBy === 'date'){
        return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBy === 'amount'){
        return a.amount < b.amount ? 1 : -1;
    }
});
};

const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters : filtersReducer
    })
);

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({description : 'rent', amount : 100 , createdAt : 1000}));
const expense2 = store.dispatch(addExpense({description : 'book', note : 'JS Book', amount:50, createdAt : -1000}));

// store.dispatch(removeExpense( { id: expense1.expense.id } ));
// store.dispatch(editExpense(expense2.expense.id,{ amount : 500 }));

//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//store.dispatch(setStartDate(-1250));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


const demoState = {
    expenses : [{
        id : 'sadfffdfgv',
        description : 'January Rent',
        note : 'This was final payment for that address',
        amount : 54500,
        createdAt : 0
    }],
    filters: {
        text : 'rent',
        sortBy : 'amount', // date or amount
        startDate : undefined,
        endDate : undefined
    }

}

