import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SignIn from '../index'
import { Provider } from 'react-redux'
import { store } from '../../../store'
describe('SignIn', () => {
    it('renders appropriately', () => {
        render(<Provider store={store}><SignIn /></Provider>)        
        expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    })
})