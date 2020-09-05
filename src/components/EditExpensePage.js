import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ConfirmationModal from './ConfirmationModal';

class EditExpensePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedExpense: undefined
    };
  }

  onRemoveClick = () => {
    this.setState(() => ({ selectedExpense: this.props.expense.description }));
  };

  setConfirmationFalse = () => {
    this.setState(() => ({ selectedExpense: undefined }));
  };

  removeExpense = () => 
  { this.props.dispatch(startRemoveExpense({ id: this.props.expense.id }) );
    this.setState(() => ({ selectedExpense: undefined }));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={(expense) => {
              this.props.dispatch(startEditExpense(this.props.expense.id, expense));
              this.props.history.push('/');
            }}
          />
          <button
            className='button button--remove'
            onClick={this.onRemoveClick}
          >Remove Expense
          </button>
          <ConfirmationModal
            selectedExpense={this.state.selectedExpense}
            removeExpense={this.removeExpense}
            setConfirmationFalse={this.setConfirmationFalse}
          />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, props) =>
  ({ expense: state.expenses.find(expense => expense.id === props.match.params.id) });

export default connect(mapStateToProps)(EditExpensePage);
