export const isProd = process.env.NODE_ENV === 'production'
export const options = data => ({
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'Content-Type': 'application/json'
  }
})
