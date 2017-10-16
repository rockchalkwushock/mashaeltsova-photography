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

// FIXME: I don't want this exposed
// 1) Need to figure out how to properly get it injected at runtime.
// 2) How to get CircleCi to see it as well.
const url = 'https://mep-v1.now.sh'
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
