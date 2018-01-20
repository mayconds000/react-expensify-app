import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
  const state =  expensesReducers(undefined, { type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '9',
    description: 'Energy',
    note: 'Eletric Energy',
    amount: 52000,
    createdAt: moment(0).add(2, 'days').valueOf()
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = { description: 'Mall shop' };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[1],
    { ...expenses[2], ...updates }
  ]);
});

test('should not edit expense if expense not found', () => {
  const updates = { description: 'Mall shop' };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
  };
  const state = expensesReducers(expenses, action);
  expect(state).toEqual(expenses);
});