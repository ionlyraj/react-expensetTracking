import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({description : 'Water bill', note: 'last month water bill', amount: 300, createdAt: 10021}));
store.dispatch(addExpense({description: 'Gas bill', note: 'HP gas bill', amount: 800, createdAt: -1121}));
store.dispatch(addExpense({description: 'Rent', note: 'final rent', amount: 20800, createdAt: 121}));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementsByClassName('root')[0]);