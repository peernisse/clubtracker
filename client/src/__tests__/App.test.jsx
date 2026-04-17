// src/__tests__/App.test.jsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App.jsx'
import axios from 'axios'
import { vi } from 'vitest'

vi.mock('axios')

const mockData = { some: 'payload' }

test('App fetches data on mount and on refresh', async () => {
  axios.get.mockResolvedValueOnce({ data: mockData })

  render(<App />)

  // header exists
  expect(screen.getByRole('heading', { name: /Clubtracker/i })).toBeInTheDocument()

  // wait for axios.get to be called on mount
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1))

  // setup next call and click refresh
  const user = userEvent.setup()
  axios.get.mockResolvedValueOnce({ data: mockData })
  const btn = screen.getByRole('button', { name: /refresh data/i })
  await userEvent.click(btn)
  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2))
})