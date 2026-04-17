// src/__tests__/App.error.test.jsx
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App.jsx'
import axios from 'axios'
import { vi } from 'vitest'

vi.mock('axios')

test('shows error on initial fetch and retries on refresh', async () => {
  // initial request fails
  axios.get.mockRejectedValueOnce(new Error('Network error'))

  render(<App />)

  // wait for error message
  await waitFor(() => expect(screen.getByText(/Error:/i)).toBeInTheDocument())

  // prepare success for retry
  axios.get.mockResolvedValueOnce({ data: { some: 'payload' } })
  const user = userEvent.setup()
  const btn = screen.getByRole('button', { name: /refresh data/i })
  await user.click(btn)

  await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(2))
  // after successful retry the error message should disappear
  await waitFor(() => expect(screen.queryByText(/Error:/i)).not.toBeInTheDocument())
})