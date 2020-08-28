import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>Description: {description}</h3>
            </Link>
            <p>Note: {note}</p>
            <p>Amount: {numeral(amount / 100).format('$0,0.00')}</p>
            <p>createdAt: {moment(createdAt).format('MMMM Do, YYYY')}</p>
        </div>
    );
};

export default ExpenseListItem;