import { styles } from '../../../lib'

const CustomTextArea = props => (
  <div className="field">
    <textarea {...props} />
    <label htmlFor={props.label}>{props.label}</label>
    <style jsx>{`
      .field {
        grid-column: span 6;
        height: 60px;
        line-height: 44px;
        position: relative;
        text-align: left;
      }
      label {
        position: absolute;
        text-align: left;
        top: -12px;
        transition: 0.2s all;
        width: 100%;
      }
      textarea {
        background-color: transparent;
        background-repeat: no-repeat;
        border: 0;
        border-bottom: 2px solid ${styles.colors.warm};
        color: ${styles.colors.warm};
        font-size: 1em;
        outline: 0;
        overflow: auto;
        padding: 0em 0.5em;
        position: absolute;
        resize: none;
        text-align: left;
        width: 100%;
        z-index: 1;
      }
      textarea:focus ~ label {
        top: -35px;
      }
      textarea:focus {
        height: 60px;
      }
      textarea::placeholder {
        color: ${styles.colors.warm};
      }
      ::-webkit-textarea-placeholder {
        /* Chrome/Opera/Safari */
        color: ${styles.colors.warm};
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: ${styles.colors.warm};
      }
      :-ms-textarea-placeholder {
        /* IE 10+ */
        color: ${styles.colors.warm};
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: ${styles.colors.warm};
      }
    `}</style>
  </div>
)

export default CustomTextArea
