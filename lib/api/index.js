import 'isomorphic-fetch'

import { options } from '../utils'

// Redux Constants
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS '
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

// Redux Success Action
const fetchData = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data // Returns { message: 'Your email was sent!' }
})

// Redux Error Action
const fetchError = data => ({
  type: FETCH_DATA_ERROR,
  payload: data // Returns { error: 'There was a problem with your request, please try back later.' }
})

// Function for querying the api.
const mailClient = async input => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/mail`, options(input))
    const data = await res.json()
    return data
  } catch (e) {
    throw e
  }
}

// Redux Async-Action-Creator
export const getBookingInfo = values => async dispatch => {
  const data = await mailClient(values)
  if (data.error) return dispatch(fetchError(data))
  return dispatch(fetchData(data))
}
