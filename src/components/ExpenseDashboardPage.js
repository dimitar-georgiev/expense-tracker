/**
 * Created by Mitaka on 17-Nov-17.
 */
import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const  ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
);

export default ExpenseDashboardPage;