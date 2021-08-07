import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../store'
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react-native';

import Billing from './Billing'

test('show error message onAddProduct before entering params', async () => {

  const screen = render(<Provider store={store}><Billing /></Provider>);

  const addButton = screen.getByTestId('add-product')
  fireEvent.press(addButton)

  await waitFor(() => expect(screen.getByTestId('error-message')).toBeTruthy())

  afterEach(cleanup)
})