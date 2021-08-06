import React from 'react'
import TestRenderer from 'react-test-renderer';
import { Provider } from 'react-redux'
import { store } from '../store'
import { cleanup } from '@testing-library/react-native';

import Billing from './Billing'

describe('component mount', () => {
  let testRenderer: any;
  beforeEach(() => {
    jest.useFakeTimers()
    testRenderer = TestRenderer.create(<Provider store={store}><Billing /></Provider>);
  })

  it('Work', () => {
    expect(testRenderer).not.toBeNull()
  })

  afterEach(cleanup)
})