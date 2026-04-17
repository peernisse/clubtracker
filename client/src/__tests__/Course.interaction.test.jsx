// src/__tests__/Course.interaction.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
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

test('selecting state → course → tee shows tee details', async () => {
  render(<Course data={mockData} />)

  // assume Select renders native <select> elements (adapt selectors if yours differ)
  const selects = () => screen.getAllByRole('combobox') // state, course, tees
  // choose state
  const stateSelect = selects()[0]
  fireEvent.change(stateSelect, { target: { value: 'CA' } })

  // choose course
  const courseSelect = selects()[1]
  fireEvent.change(courseSelect, { target: { value: 'MyCourse' } })

  // choose tee (gender defaults to 'M' in component)
  const teeSelect = selects()[2]
  fireEvent.change(teeSelect, { target: { value: 'Blue' } })

  // assert tee details present
  expect(await screen.findByText(/Length \(yds\): 7000/)).toBeInTheDocument()
  expect(screen.getByText(/Par: 72/)).toBeInTheDocument()
  expect(screen.getByText(/Course rating: 75.2/)).toBeInTheDocument()
})