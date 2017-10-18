import { styles } from '../../lib'

/**
 * REVIEW
 *
 * Use HTML minLength, maxLength, required instead of validation?
 */

const CustomTextArea = ({ input, placeholder }) => (
  <div>
    <textarea
      {...input}
      autoComplete="off"
      cols="22"
      placeholder={placeholder}
      rows="5"
    />
    <style jsx>{`
      textarea {
        background-color: Transparent;
        background-repeat: no-repeat;
        border: 1px solid blue;
        font-family: ${styles.fonts.nunito};
        font-size: 1em;
        outline: none;
        overflow: auto;
        resize: none;
        text-align: center;
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
