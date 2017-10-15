import axios from 'axios'

// Redux Constants
const FETCH_DATA = 'FETCH_DATA'
const FETCH_ERROR = 'FETCH_ERROR'

// Redux Success Action
const fetchData = data => ({
  type: FETCH_DATA,
  payload: data // Returns { message: 'Your email was sent!' }
})

// Redux Error Action
const fetchError = data => ({
  type: FETCH_ERROR,
  payload: data // Returns { error: 'There was a problem with your request, please try back later.' }
})

// REVIEW doing this will prevent CORS problems in development
// since CORS is set to look at the client's production url when
// it is running in production.
const url =
  process.env.NODE_ENV === 'production'
    ? process.env.PROD_ENDPOINT
    : process.env.DEV_ENDPOINT

// Function for querying the api.
const mailClient = async input => {
  try {
    const { data } = await axios.post(url, input)
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
