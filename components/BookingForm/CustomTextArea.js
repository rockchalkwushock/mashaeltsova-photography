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
        background-color: ${styles.colors.peach};
        background-repeat: no-repeat;
        border: 1px solid ${styles.colors.warm};
        border-radius: 10px;
        box-shadow: 2px 2px 2px 1px rgba(223, 116, 74, 0.5);
        color: ${styles.colors.warm};
        font-family: ${styles.fonts.nunito};
        font-size: 1em;
        outline: none;
        overflow: auto;
        padding: 0.5em;
        resize: none;
        text-align: center;
        width: 100%;
      }
      textarea:focus {
        text-align: left;
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
      @media (min-width: 768px) {
        textarea {
          width: 60%;
        }
      }
    `}</style>
  </div>
)

export default CustomTextArea
