// src/__tests__/Course.test.jsx
import { render, screen } from '@testing-library/react'
import Course from '../components/Course.jsx'

const mockData = {
  CA: {
    MyCourse: {
      tee_info: {
        M: {
          Blue: [
            {
              tee_length: 7000,
              tee_par: 72,
              tee_course_rating: 75.2,
              tee_slope_rating: 130,
              tee_bogey_rating: 80
            }
          ]
        }
      }
    }
  }
}

test('Course shows loading when no data', () => {
  render(<Course data={null} />)
  expect(screen.getByText(/Loading course data/i)).toBeInTheDocument()
})

test('Course renders main controls when data provided', () => {
  render(<Course data={mockData} />)
  expect(screen.getByRole('heading', { name: /Select your gender/i })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: /Select your state/i })).toBeInTheDocument()
})