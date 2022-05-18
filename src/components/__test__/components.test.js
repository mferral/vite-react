import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Logo from '../Logo'

describe('Logo', () => {
    it('renders appropriately', () => {
        render(<Logo />)
        expect(screen.getByText(/chat/i)).toBeInTheDocument()
    })
})