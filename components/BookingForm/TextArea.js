import React from 'react'

const TextArea = ({ label, input, meta: { error, touched } }) => (
  <div>
    <label htmlFor={label} />
    <div>
      <textarea {...input} name={label} placeholder={label} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

export default TextArea
