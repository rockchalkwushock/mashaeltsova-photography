import axios from 'axios'

// Configure baseURL
axios.defaults.baseURL = process.env.BACKEND_URL

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
    const { data } = await axios.post('/mail', input)
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
