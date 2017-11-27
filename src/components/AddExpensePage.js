/**
 * Created by Mitaka on 17-Nov-17.
 */
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses';

const  AddExpensePage = (props) => (
    <div>
        <h2>Add Expense</h2>
        <ExpenseForm
            onSubmit={(expense) => {
                //console.log("Expense: ",expense);
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);