import CustomInput from './CustomInput'
import CustomLabel from './CustomLabel'
import CustomSpan from './CustomSpan'
import CustomTextArea from './CustomTextArea'

const CustomField = ({ label, input, type, meta: { error, touched } }) => {
  if (input.name === 'message') {
    return (
      <div className="field">
        <CustomLabel label={label} />
        <CustomTextArea input={input} placeholder={label} />
        {touched && (error && <CustomSpan>{error}</CustomSpan>)}
        <style>{`
      .field {
        grid-column: span 6;
        text-align: center;
        width: 100%;
      }
    `}</style>
      </div>
    )
  }
  return (
    <div className="field">
      <CustomLabel label={label} />
      <CustomInput input={input} placeholder={label} type={type} />

      {touched && (error && <CustomSpan>{error}</CustomSpan>)}
      <style>{`
      .field {
        grid-column: span 6;
        text-align: center;
        width: 100%;
      }
    `}</style>
    </div>
  )
}

export default CustomField
