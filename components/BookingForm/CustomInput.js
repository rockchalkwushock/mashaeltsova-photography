/**
 * NOTE:
 *
 * Cannot pass children to <input />, no bueno React gets pissed off.
 * NOTE: 'placeholders'
 * @see https://css-tricks.com/almanac/selectors/p/placeholder/
 *
 * REVIEW
 *
 * Use HTML minLength, maxLength, required instead of validation?
 */
import { styles } from '../../lib'

const CustomInput = ({ input, placeholder, type }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    <style jsx>{`
      input {
        background-color: Transparent;
        background-repeat: no-repeat;
        border: none;
        font-family: ${styles.fonts.nunito};
        font-size: 1em;
        height: 25px;
        outline: none;
        text-align: center;
        width: 80%;
      }
      input::placeholder {
        color: ${styles.colors.warm};
      }
      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: ${styles.colors.warm};
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: ${styles.colors.warm};
      }
      :-ms-input-placeholder {
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

export default CustomInput
