import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
    return (
        <div>
            <Link to={`/edit/${id}`}>
                <h3>Description: {description}</h3>
            </Link>
            <p>Note: {note}</p>
            <p>Amount: {amount}</p>
        </div>
    );
};

export default ExpenseListItem;