/**
 * NOTE:
 *
 * Cannot pass children to <input />, no bueno React gets pissed off.
 * NOTE: 'placeholders'
 * @see https://css-tricks.com/almanac/selectors/p/placeholder/
 *
 * REVIEW
 * FIXME
 *
 * Currently :-webkit-autofill is only supported in Chrome & Safari
 * however most 'user agent stylesheets' have this set as !important
 * and it cannot be overridden...this makes my form look ghetto af!
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/:-webkit-autofill
 *
 */
import { styles } from '../../lib'

const CustomInput = ({ input, placeholder, type }) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    <style jsx>{`
      input {
        background-color: ${styles.colors.peach}; /* Transparent */
        background-repeat: no-repeat;
        border: 1px solid ${styles.colors.warm};
        border-radius: 10px;
        box-shadow: 2px 2px 2px 1px rgba(223, 116, 74, 0.5);
        color: ${styles.colors.warm};
        font-family: ${styles.fonts.nunito};
        font-size: 1em;
        height: 35px;
        outline: none;
        padding: 0.5em;
        text-align: center;
        width: 100%;
      }
      input:focus {
        text-align: left;
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
      @media (min-width: 768px) {
        input {
          width: 60%;
        }
      }
    `}</style>
  </div>
)

export default CustomInput
