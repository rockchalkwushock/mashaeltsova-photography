import axios from 'axios'

axios.defaults.baseURL = process.env.BACKEND_URL

const sendDataToBackend = async ({ values }) => {
  try {
    const { data } = await axios.post('/mail', values)
    return data
  } catch (e) {
    throw e
  }
}

export default sendDataToBackend
