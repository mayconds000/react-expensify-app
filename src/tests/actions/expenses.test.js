import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense( { id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { description: 'Rent', amount: 123400, note: 'new note value'});
   expect(action).toEqual({
    id: '123abc',
    type: "EDIT_EXPENSE",
    updates: { description: 'Rent', amount: 123400, note: 'new note value' }
   });
});

test('shoul setup add expense action object with provided values', () => {
 const expenseData = {
   description: 'Rent',
   amount: 192300,
   createdAt: 1000,
   note: 'This was last months rent',
 };

 const action = addExpense(expenseData);
 expect(action).toEqual({
  type: 'ADD_EXPENSE',
  expense: {
    ...expenseData,
    id: expect.any(String)
  }
 });
});

test('should setup add expense action object with default values', () => {
  expect(addExpense()).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  });
});
