import React from 'react';
import { render, fireEvent, getAllByLabelText } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import App from './App';

test ("user-events allows users to add to cart...", () => {
const {getByText, } = render(<App />);

const button = getByText ('ReStock Products');

userEvent.click(button);

});