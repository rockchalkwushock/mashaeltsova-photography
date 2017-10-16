import React from 'react'

const TextArea = ({ label, meta: { error, touched } }) => (
  <div>
    <label htmlFor={label} />
    <div>
      <textarea name={label} placeholder={label} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

export default TextArea
