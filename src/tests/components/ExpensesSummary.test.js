import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from "../../components/ExpensesSummary";  

test('shoudl correctly render ExpenseSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={213} />);
  expect(wrapper).toMatchSnapshot();
});

test('shoudl correctly render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={35} expensesTotal={21312345687} />);
  expect(wrapper).toMatchSnapshot();
});